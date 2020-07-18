﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GM.GoogleCloud;
using Microsoft.Toolkit.Parsers.Markdown;
using GM.Utilities;
using System.Reflection.Metadata;
using System.Text.RegularExpressions;

#pragma warning disable IDE0059
#pragma warning disable IDE0051
#pragma warning disable IDE0060

namespace GM.Utilities.Translate
{
    class TranslateDocs
    {
        readonly TranslateInCloud translateInCloud;
        readonly string docsFolder = Path.Combine(GMFileAccess.GetClientAppFolder(), @"src\assets\docs");

        public TranslateDocs(TranslateInCloud _translateInCloud)
        {
            translateInCloud = _translateInCloud;
        }

        // Note: If we add a new language, we also need to change:
        //   FrontEnd\ClientApp\src\app\dashboard\dashboard-titles.ts
        //   FrontEnd\ClientApp\src\app\about-project\document-pages.ts
        //   FrontEnd\ClientApp\src\app\sidenav\sidenav-header\sidenav-header.ts
        public void Run(string[] args)
        {
            // Setting update to true attempts to only re-translate files that were edited.
            // But it is not working yet.
            bool update = true;

            // All current documents.
            List<string> allDocuments = new List<string>()
                { "overview1", "overview2", "workflow", "project-status", "setup", "sys-design", "dev-notes", "database"};

            // All languages that we currently support
            List<string> allLanguages = new List<string>()
                { "de", "es", "fr", "it", "fi", "ar", "sw", "zh", "pt" , "bn", "hi" };

            // Documents that change often.
            List<string> someDocuments = new List<string>()
                { "sys-design"};

            // We may do some languages at a time.
            List<string> someLanguages = new List<string>()
                { "hu" };

            // No documents have yet to be translated into these languages 
            List<string> moreLanguages = new List<string>()
                { "ic", "sw", "no" };

            // uncomment one of the following lines.
            // TranslateDocumentsLanguages(allDocuments, allLanguages, update);
            TranslateDocumentsLanguages(allDocuments, someLanguages, update);
            // TranslateDocumentsLanguages(allDocuments, moreLanguages, update);

            AddToArrays("hu", "Hungarian");
        }

        private void TranslateDocumentsLanguages(List<string> documents, List<string> languages, bool update)
        {
            foreach (string language in languages)
            {
                string languageFolder = Path.Combine(docsFolder, "TRANS", language.ToUpper());
                if (!Directory.Exists(languageFolder))
                {
                    Directory.CreateDirectory(languageFolder);
                }
                foreach (string document in documents)
                {
                    if (update)
                    {
                        Console.WriteLine("Update not working yet");
                    }
                    // NOTE: THIS CODE DOES NOT WORK. (In Windows at least)
                    // Windows' LastWriteTime is not acurate.

                    // // Compare times if we are only updating.
                    // if (update)
                    // {
                    //     string file = GetEnglishDocumentPath(document);
                    //     DateTime filedt = File.GetLastWriteTime(file);

                    //     string transfile = GetTranslatedDocumentPath(document, language);
                    //     DateTime transfiledt = File.GetLastWriteTime(transfile);

                    //     // if the translation is newer than the english, then the english has not changed.
                    //     if (filedt < transfiledt)
                    //     {
                    //         continue;
                    //     }
                    // }
                    
                    TranslateDocument(document, language, true);
                    Console.WriteLine(document + ":" + language + ", ");
                };
            }
        }

        private void AddToArrays(string language, string languageName)
        {
            string docpages = @"""Overview"", ""Workflow"", ""Project status"", ""Setup"", ""Developer notes"", ""Database"", ""Design""";
            string dashtitles = @"""Politics"", ""Legislation"", ""Meetings"", ""Govmeeting News"", ""Edit Transcript"", ""Add Tags to Transcript"", ""View Transcript"", ""Issues"", ""Officials"", ""Virtual Meeting"", ""Chat"", ""Charts"", ""Notes"", ""Meeting Minutes"", ""Work Items"", ""Alerts""";
            string docpagesFile = Path.Combine(GMFileAccess.GetClientAppFolder(), @"src\app\about-project\document-pages.ts");
            string dashtitlesFile = Path.Combine(GMFileAccess.GetClientAppFolder(), @"src\app\dashboard\dashboard-titles.ts");
            string sidenavheaderFile = Path.Combine(GMFileAccess.GetClientAppFolder(), @"src\app\sidenav\sidenav-header\sidenav-header.ts");

            string translated = translateInCloud.TranslateText(docpages, language);  // translate
            translated = Regex.Replace(translated, @"„|”|“", @"""");        // replace other version of double quotes.
            string text = File.ReadAllText(docpagesFile);
            string newtext = text.Replace(@"]//ADD_HERE", @"]," + Environment.NewLine + @"    [""" + languageName + @""", """ + language + @""", " + translated + @"]//ADD_HERE");
            File.WriteAllText(docpagesFile, newtext);

            translated = translateInCloud.TranslateText(dashtitles, language);  // translate
            translated = Regex.Replace(translated, @"„|”|“", @"""");        // replace other version of double quotes.
            text = File.ReadAllText(dashtitlesFile);
            newtext = text.Replace(@"]//ADD_HERE", @"]," + Environment.NewLine + @"    [""" + languageName + @""", """ + language + @""", " + translated + @"]//ADD_HERE");
            File.WriteAllText(dashtitlesFile, newtext);

            // {enname: 'English', value: 'en', viewValue: 'English'}
            translated = translateInCloud.TranslateText(languageName, language);  // translate
            text = File.ReadAllText(sidenavheaderFile);
            newtext = text.Replace(@"}//ADD_HERE", @"}," + Environment.NewLine + @"    {enname: '" + languageName + @"', value: '" + language + @"', viewValue: '" + translated + @"'}//ADD_HERE");
            File.WriteAllText(sidenavheaderFile, newtext);
        }

        private string GetEnglishDocumentPath(string document)
        {
            return docsFolder + "\\" + document + ".md";
        }

        private string GetTranslatedDocumentPath(string document, string language)
        {
            return docsFolder + "\\TRANS\\" + language.ToUpper() + "\\" + document + ".md";
        }

        // The purpose of deletePrior is to facilitate resuming translation if we abort and restart.
        // Normally, this is set to true, since we always delete the prior translations.
        // If we set it to false and manually delete the translations before starting,
        // then if we abort the process, we can restart it and it will only translate those
        // which haven't been done yet.
        private void TranslateDocument(string document, string language, bool deletePrior)
        {
            string file = GetEnglishDocumentPath(document);
            string newFile = GetTranslatedDocumentPath(document, language);

            if (File.Exists(newFile) && deletePrior)
            {
                File.Delete(newFile);
            }

            if (!File.Exists(newFile))
            {
                string contents = GMFileAccess.Readfile(file);
                var htmlContents = CommonMark.CommonMarkConverter.Convert(contents);
                //string htmlFile = file.Replace(".md", ".html");
                //File.WriteAllText(htmlFile, htmlContents);

                string doNotEdit = "<!-- Do not edit this file. It was translated by Google. -->\n";

                contents = doNotEdit + contents;

                string translated = translateInCloud.TranslateHtml(htmlContents, language);
                //string htmlNewFile = newfile.Replace(".md", ".html");
                //File.WriteAllText(htmlNewFile, translated);

                string replaced = ReplaceSomeStrings(translated);

                File.WriteAllText(newFile, doNotEdit + replaced);

                // Wait 30 seconds. GCP didn't like me running a close loop.
                Task.Delay(30000).Wait();
            }
        }




        // The TranslateHtml method removes most newlines from the output. This makes it difficult to check for validity.
        // We try to put back newlines in appropriate places.
        // We also replace the HTML escape sequences with the actual characters. We don't use escape sequences in the markdown.
        private string ReplaceSomeStrings(string text)
        {
            var rpls = new Dictionary<string, string>
            {
                {" ____", "\n____" },
                {" C # ", " C# "},
                {" # ", "\n# " },
                {" ## ", "\n## " },
                {" ### ", "\n### " },
                {" * ", "\n* " },
                {"&quot;", "\"" },
                {"&amp;", "&" },
                {"</tr><tr>", "</tr>\n<tr>" },
                {"\"><tr>", "\">\n<tr>" },
                {"<table", "\n<table" },
                {"</table>", "\n</table>\n" },
                {"<markdown ngPreserveWhitespaces>", "\n<markdown ngPreserveWhitespaces>\n" },
                {"</markdown>", "\n</markdown>\n" },
                {"<ul>", "\n<ul>" },
                {"</ul>", "\n</ul>" },
                {"<li>", "\n<li>" },
                {"</p>", "</p>\n" },
                {"<p>", "\n<p>" }
        };


            foreach (KeyValuePair<string, string> r in rpls)
            {
                text = text.Replace(r.Key, r.Value);
            }
            return text;
        }

        private void ParseMarkdown()
        {
            string md = "This is **Markdown**";
            MarkdownDocument document = new MarkdownDocument();
            document.Parse(md);

            // Takes note of all of the Top Level Headers.
            foreach (var element in document.Blocks)
            {
                Console.WriteLine(element.ToString());
                //if (element is HeaderBlock header)
                //{
                //    Console.WriteLine($"Header: {header.ToString()}");
                //}
            }
        }

        private void RenderMarkdown()
        {
            var result = CommonMark.CommonMarkConverter.Convert("**Hello world!**");
        }

        public void DoSomethingToAllFiles(string lang)
        {

            var files = from f in Directory.EnumerateFiles(docsFolder)
                        where f.EndsWith("." + lang + ".md")
                        select f;
            foreach (string file in files)
            {
                if (!File.Exists(file))
                {
                    Console.WriteLine("ERROR: file does not exist: " + file);
                    continue;
                }

                string contents = GMFileAccess.Readfile(file);

                // Do something

            }
        }


    }
}

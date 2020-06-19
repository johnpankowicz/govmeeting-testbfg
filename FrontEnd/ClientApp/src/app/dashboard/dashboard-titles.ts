let DashboardTitles: string[][] = [
  ["English", "en", "Politics", "Legislation", "Meetings", "Govmeeting News", "Edit Transcript", "Add Tags to Transcript", "View Transcript", "Issues", "Officials", "Virtual Meeting", "Chat", "Charts", "Notes", "Meeting Minutes", "Work Items", "Alerts" ],
  ["German", "de", "Politik", "Gesetzgebung", "Besprechungen", "Govmeeting Nachrichten", "Transkript bearbeiten", "Tags zum Transkript hinzufügen", "Transkripten anzeigen", "Probleme", "Beamte", "Virtuelles Meeting", "Chat", "Diagramme" , "Notizen", "Sitzungsprotokolle", "Arbeitselemente", "Warnungen"],
  ["Spanish", "es", "Política", "Legislación", "reuniones", "Noticias Govmeeting", "Editar transcripción", "Agregar etiquetas a la transcripción", "Ver transcripción", "Problemas", "Funcionarios", "Reunión virtual", "Chat", "Gráficos" , "Notas", "Actas de reuniones", "Elementos de trabajo", "Alertas"],
  ["French", "fr", "Politique", "Législation", "Réunions", "Actualités", "Modifier la transcription", "Ajouter des balises à la transcription", "Voir la transcription", "Issues", "Enjeux", "Fonctionnaires", "Réunion virtuelle", "Bavarder"," Graphiques "," Remarques"," Procès-verbaux de réunion "," Éléments de travail "," Alertes "],
  ["Icelandic", "is", "Stjórnmál", "löggjöf", "fundir", "frétt um stjórnarmyndunarviðskipti", "fullgilt afrit", "Bæta merkjum við afrit", "Skoða afrit", "mál", "embættismenn", "Sýndarfundur", "spjall", "töflur" , "Athugasemdir", "Fundargerðir fundargerð", "Vinnuatriði", "Viðvaranir"],
  ["Italian", "it", "Politica", "Legislazione", "incontri", "Notizie importanti", "Modifica trascrizione", "Aggiungi tag alla trascrizione", "Visualizza trascrizione", "Problemi", "Funzionari", "Riunione virtuale", "Chat", "Grafici" , "Note", "Verbale riunione", "Articoli di lavoro", "Avvisi"],
  ["Finish", "fi", "Politiikka", "Lainsäädäntö", "Kokoukset", "Govmeeting-uutiset", "Muokkaa sanakirjaa", "Lisää tunnisteita tekstiksi", "Näytä kopio", "Aiheet", "Virkamiehet", "Virtuaali kokous", "Keskustelu", "Kaaviot" , "Muistiinpanot", "Kokouspöytäkirjat", "Työesineet", "Hälytykset"],
  ["Arabic", "ar", "السياسة" ,  "التشريع" ,  "الاجتماعات" ,  "أخبار الحكومة" ,  "تحرير النص" ,  "إضافة علامات إلى النص" ,"عرض النص",  "عرض آخر اجتماع" ,  "الإصدارات" ,  "المسؤولين" ,  "الدردشة" ,  "الرسوم البيانية" ,  "ملاحظات" ,  "محضر الاجتماع" ,  "عناصر العمل" ,  "التنبيهات"],
  ["Swahili", "sw", "Siasa", "Sheria", "mikutano", "Habari za Govmeeting", "Hariri Nakala", "Ongeza vitambulisho kwa nakala", "Angalia Nakala", "Masuala", "Viongozi", "Mkutano wa kweli", "Ongea", "Chati" , "Vidokezo", "Dakika za Mkutano", "Vitu vya Kazi", "Taadhari"],
  ["Mandarin", "zh", "政治", "立法", "会议", "政府新闻", "编辑成绩单", "向成绩单添加标签", "查看成绩单", "问题", "官员", "虚拟会议", "聊天", "图表" , "注释", "会议记录", "工作项", "警报"],
  ["Portuguese", "pt", "Política", "Legislação", "reuniões", "Notícias do Govmeeting", "Transcrição de revisão", "Adicionar tags à transcrição", "Ver transcrição", "Edições", "Funcionários", "Reunião virtual", "Bate-papo", "Gráficos" , "Notas", "Atas da reunião", "Itens de trabalho", "Alertas"],
  ["Bengali", "bn", "রাজনীতি", "আইন", "সভা", "সরকারী সংবাদ", "প্রতিলিপি সম্পাদনা করুন", "ট্রান্সক্রিপ্টে ট্যাগ যুক্ত করুন", "প্রতিলিপি দেখুন", "সমস্যা", "আধিকারিক", "ভার্চুয়াল সভা", "চ্যাট", "চার্ট" , "নোটস", "মিটিং মিনিট", "কাজের আইটেম", "সতর্কতা"],
  ["Hindi", "hi", "राजनीति", "विधान", "बैठकें", "गोवमीटिंग न्यूज़", "ट्रांसक्रिप्ट संपादित करें", "टैगिंग को ट्रांसक्रिप्ट में जोड़ें", "प्रतिलेख देखें", "मुद्दे", "अधिकारी", "वर्चुअल मीटिंग", "चैट", "चार्ट" , "नोट्स", "मीटिंग मिनट", "कार्य आइटम", "अलर्ट"],
  ["Greek", "el", "Πολιτική", "Νομοθεσία", "Συναντήσεις", "Ειδήσεις Govmeeting", "Επεξεργασία μεταγραφής", "Προσθήκη ετικετών σε μεταγραφή", "Προβολή μεταγραφής", "Θέματα", "Αξιωματούχοι", "Εικονική συνάντηση", "Συζήτηση" , "Διαγράμματα", "Σημειώσεις", "Συνοπτικά πρακτικά", "Αντικείμενα εργασίας", "Ειδοποιήσεις"],
  ["Japanese", "ja", "「政治」", "「法令」", "「会議」", "「Govmeetingニュース」" , "「トランスクリプトの編集」", "「トランスクリプトへのタグの追加」", "「トランスクリプトの表示」", "「問題」", "「公式」", "「仮想会議」", "「チャット」", "「グラフ」", "「メモ」", "「議事録」", "「作業項目」", "「アラート」"]
]


export function GetDashboardTitle(englishTitle: string, language: string) : string {
  let i = DashboardTitles[0].findIndex(x => x == englishTitle);
  let j = DashboardTitles.findIndex(y => y[1] == language);
  return DashboardTitles[j][i];
}

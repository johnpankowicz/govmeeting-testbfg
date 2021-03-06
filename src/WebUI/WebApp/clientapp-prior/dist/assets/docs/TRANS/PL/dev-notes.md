<!-- Do not edit this file. It was translated by Google. -->
<h1> Przetwarzaj nowe formaty transkrypcji </h1>
<p> Ostatecznym celem jest napisanie kodu, który przetworzy dowolny format transkrypcji. Ale do tego czasu musimy napisać niestandardowy kod do obsługi każdego nowego formatu. Kiedy będziemy mieć wystarczająco dużo próbek różnych formatów, będziemy w stanie lepiej napisać ogólny kod. </p>

<p> Oto etapy obsługi nowych formatów transkrypcji: </p>

<ul>
<li>
<p> Uzyskaj przykładowy zapis spotkania rządowego w formacie pdf lub tekstowym. </p>
</li>
<li>
<p> Nazwij plik w następujący sposób: „country_state_county_municipal_agency_language-code_date.pdf”. (lub .txt) Na przykład: </p>
<pre> <code> "USA_ME_LincolnCounty_BoothbayHarbor_Selectmen_en_2017-01-09.pdf".</code> </pre></li>
<li>
<p> Utwórz nową klasę z interfejsem „ISpecificFix” w projekcie „ProcessTranscripts_Lib”. </p>
</li>
<li>
<p> Nazwij klasę „country_state_county_mune_agency_language-code”. Na przykład: </p>
<pre> <code> public class USA_ME_LincolnCounty_BoothbayHarbor_Selectmen_en : ISpecificFix</code> </pre></li>
<li>
<p> Zaimplementuj metodę klasy: </p>
<pre> <code> string Fix(string _transcript, string workfolder)</code> </pre></li>
<li>
<p> Fix () odbiera istniejący tekst transkrypcji i zwraca tekst w następującym formacie: </p>
</li>
</ul><pre> <code>Section: INVOCATION Speaker: COUNCIL PRESIDENT CLARKE Good morning. We&#39;re getting a very late start, so we&#39;d like to get moving. To give our invocation this morning, the Chair recognizes Pastor Mark Novales of the City Reach Philly in Tacony. I would ask all guests, members, and visitors to please rise. (Councilmembers, guests, and visitors rise.) Speaker: PASTOR NOVALES Good morning, City Council and guests and visitors. I pastor, as was mentioned, a powerful little church in -- a powerful church in Tacony called City Reach Philly. I&#39;m honored to stand in this great place of decision-making. ...</code> </pre>
<p> Po ukończeniu tej klasy WorkflowApp przetworzy nowe transkrypcje, gdy pojawią się one w „DANYCH / ODBIORCÓW”. </p>

<p> Uwagi: </p>

<p> Używamy System.Reflection, aby utworzyć poprawną klasę na podstawie nazwy pliku do przetworzenia. </p>

<p> Zobacz na przykład klasę „USA_PA_Philadelphia_Philadelphia_CityCouncil_en” w ProcessTranscripts_Lib. Możesz lepiej zrozumieć, co robi ta klasa, patrząc na ślady pliku dziennika w „folderze roboczym”, który jest przekazywany jako argument do Fix (). </p>

<p> Nie wyodrębniamy teraz następujących informacji, ale w końcu będziemy chcieli to zrobić. </p>

<ul>
<li> Obecni urzędnicy </li>
<li> Wprowadzono projekty ustaw i uchwał </li>
<li> Wyniki głosowania </li>
</ul>
<p> Austin, Teksas - USA ma również transkrypcje publicznych spotkań online. Utworzono klasę o nazwie „USA_TX_TravisCounty_Austin_CityCouncil_en” w ProcessTranscripts_Lib. Ale metoda Fix () nie została zaimplementowana. Transkrypcje można uzyskać na stronie internetowej: <a href="https://www.austintexas.gov/department/city-council/council/council_meeting_info_center.htm">Austin, TX City Council</a> </p>
<h1> Zmodyfikuj pulpit klienta </h1><h2> Dodaj kartę do nowej funkcji </h2>
<ul>
<li> Po wyświetleniu monitu przejdź do folderu: FrontEnd / ClientApp </li>
<li> Wpisz: ng wygeneruj komponent swoją funkcję </li>
<li> Dodaj swoją funkcjonalność do plików w: FrontEnd / ClientApp / src / app / your-feature </li>
<li> Wstaw nowy element gm-small-card lub gm-large-card do app / dash-main / dash-main.html. </li>
<li> Zmodyfikuj ikonę, kolor ikony, tytuł itp. Elementu karty. </li>
<li> Jeśli potrzebujesz dostępu do nazwy aktualnie wybranej lokalizacji i agencji w swoim kontrolerze: 
<ul>
<li> Dodaj atrybuty lokalizacji lokalizacji i agencji do elementu elementu </li>
<li> Dodaj lokalizację i agencję @Input właściwości do kontrolera. </li>
</ul></li>
</ul>
<p> (Zobacz inne próbki w dash-main.html) </p>
<h2> Zmień układ kart </h2><ol>
<li> Otwórz plik: FrontEnd / ClientApp / src / app / dash-main / dash-main.html. </li>
<li> Zmień pozycje karty, zmieniając pozycję elementów gm-small-card lub gm-large-card w tym pliku. </li></ol><h1> Logowanie </h1>
<p> Pliki dziennika dla aplikacji WebApp i WorkflowApp znajdują się w folderze „logs” w katalogu głównym rozwiązania. </p>

<ul>
<li> „nlog-all- (date) .log” zawiera wszystkie komunikaty dziennika łącznie z systemem. </li>
<li> Plik „nlog-own- (data) .log” zawiera tylko komunikaty aplikacji. </li>
</ul>
<p> W górnej części wielu plików składowych w ClientApp jest zdefiniowana stała „NoLog”. Zmień wartość z true na false, aby włączyć rejestrowanie konsoli tylko dla tego komponentu. </p>
<h1> Twórz skrypty </h1>
<p> Skrypty budowania PowerShell można znaleźć w Utilities / PsScripts </p>

<ul>
<li> BuildPublishAndDeploy.ps1 - Zadzwoń do innych skryptów, aby zbudować wydanie i wdrożyć je. </li>
<li> Build-ClientApp.ps1 - Kompiluj produkcyjne wersje ClientApp </li>
<li> Publish-WebApp.ps1 - Zbuduj folder „opublikuj” WebApp </li>
<li> Copy-ClientAssets.ps1 - Skopiuj zasoby ClientApp do folderu wwwroot WebApp </li>
<li> Deploy-PublishFolder.ps1 - Wdróż folder publikowania na zdalnym hoście </li>
<li> Utwórz plik README.md dla Gethub z plików dokumentacji </li>
</ul>
<p> Deploy-PublishFolder.ps1 wdraża oprogramowanie na govmeeting.org, używając FTP. Dane logowania do FTP znajdują się w pliku appsettings.Development.json w folderze SECRETS. Zawiera FTP i inne tajemnice do wykorzystania w rozwoju. Poniżej znajduje się sekcja tego pliku używana przez FTP: </p>
<pre> <code>{ ... "Ftp": { "username": "your-username", "password": "your-password", "domain": "your-domain" } ... }</code> </pre>

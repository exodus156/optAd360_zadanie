Zadanie rekrutacyjne - optAd360

To tak, narzędzie do użytku wymaga tylko wykonania dwóch rzeczy, po pierwsze trzeba skopiować zawartość folderu JS, a po drugie w <head> strony umieścić skrypt <script src="path/consent_tool/tool.js" type="module"></script>, zmieniając path na oddpowiednią ścieżkę. I to tyle, postarałem się jak najbardziej wykonać to narzędzie do użytku na wielu stronach, stąd oprócz umieszczenia skryptu w head nie trzeba nic więcej modyfikować. Opis poszczególnych plików:
  tool.js - główny plik, zawiera jak i kod HTML pop-up, tak i główną logikę narzędzia + utworzenie ciasteczka.
  components/styles.js - osobny plik ze stylami do pop-up
  functions/addCSS.js - funkcja która dodaje nowy styleSheet ze stylami dla pop-up
  functions/fetchData.js - funkcja która pobiera dane z podanego endpointu
  functions/selectAllCheckboxes.js - osobna funkcja dla checkboxa "zaznacz wszystko", pozwalająca na zaznaczenie wszystkich partnerów jednocześnie, jak i również ich odznaczenie.
  
Plik cookie zawiera numery ID partnerów, które zaakceptował użytkownik.
Ciasteczko jest ważne 24 godziny od zaakceptowania partnerów.
Wymagane jest wybranie conajmniej jednego partnera przed zaakceptowaniem zgody.
Odrzucenie zgody przenosi na stronę google.com
Główny content strony ma zablokowany scroll oraz jest mocno wyblurowany, odblokowuje się to po zaakceptowaniu zgody.

W razie czego, narzędzie + dummy strona html zostały umieszczone na github pages, więc można łatwiej sprawdzić aplikację.

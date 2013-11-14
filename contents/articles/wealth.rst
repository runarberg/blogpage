======================
 Kapítalísk auðsöfnun
======================

:date: 2013-10-26 14:32
:category: Pælingar
:slug: kapitalisk-audsofnun
:template: wealth

Við græðum öll á frjálsum viðskiptum ekki satt? Þegar tveir aðillar
setjast við samningaborðið og skipta á milli sér góðæfum, þ.e. stunda
viðskipti, þá er viðskiptin fullkomlega frjáls og öllum til hagsbóta,
ekki satt? Báðir aðillar eiga jafna möguleika á að græða, og tekið
saman, ættu öll viðskipti í okkar samfélagi að leiða af sér góðæri og
velsæld fyrir alla, ekki satt?

Jæja, skoðum þetta. Setjum samfélag 10 einstaklinga, sem hver byrjar
með 100 krónur. Þeim er frjálst að stunda viðskipti sín á milli. Allir
eru þeir jafn hæfir í viðskiptum og því gætir það handahófi hvor
græðir og hvor tapar í þessum viðskiptum. Eftir nokkrar umferðir,
þegar aðilarnir hafa allir stundað sín viðskipti hver sín á milli,
ágætlega mörgum sinnum, þar sem allir eru jafn hæfir, og allir byrjuðu
með jafn mikin pening, að þá ættu þeir allir að enda með svipað mikinn
pening ekki satt? Ef leikurinn er fullkolega sanngjarn, ekki satt?

Ég skrifaði forrit sem prófar þetta. Þú getur fiktað í því ef þú
villt. Prófaðu að keyra það í nokkrar umferðir og sjáðu hvað gerist
eftir 10 skipti. Einhverjir aðilar eru komnir með meira en, aðrir. En
það er bara eðlileg hreyfing fjármuna ekki satt?

.. html::
   <div class="wealth">
   <div class="wealth_display-results"></div>
   <div class="wealth_controls"></div>
   </div>
   <script src="{filename}/scripts/wealth.js"></script>

Eftir 20 umferðir eru munurinn orðin aðeins meiri, en það sem þú ættir
helst að taka eftir er að sömu aðilar og áttu mesta peninginn fyrir
tíu umferðum síðan, eru ennþá þeir ríkustu (kannski eru þeir hæfari
en hinir?)

Eftir þrjátíu umferðir er allur grunur um sanngjarnt hagkerfi horfinn,
tveir eða þrír aðilar eiga svo til allan peninginn innan
hagkerfisins.

Fimmtíu umferðum síðar er meirihlutinn mjög fátækur og í mesta lagi
tveir eða þrír forríkir aðilar, líkast til sömu aðilar og voru ríkir
þrjátíu umferðum fyrr. Og öll von um að þetta muni jafnast út horfin.

Prófaðu þetta aftur með meiri fjármunum, með fleiri
þátttakendum. Prófaðu 50 þátttakendur, prófaðu 100. Áhrifin verða bara
verri.

Afhverju gerist þetta? Það er einginn klárari í viðskiptum en annar í
þessu hagkerfi. Þetta eru bara einhverjar tölur ákvarðaðar með
handahófi, allir eiga jafna möguleika á að græða eða tapa í
viðskiptum. En hvað þeir græða á viðskiptunum er ekki jafnt, því sumir
græða meira en aðrir.

Hagkerfið bak við súluritið virkar svo:

1. Allir aðillar byrja með jafna fjármuni.
2. Við hverja umferð er öllum raðað í pör af handahófi
3. Hvert par leggur undir þá upphæð sem fátækari aðilinn á. Þ.e. ef
   annar aðilinn á 100 krónur, en hinn á 150 krónur, þá leggja báðir
   undir 100 krónur. Svo það eru 200 krónur í pottinum
4. Valin er tala af handhófi, einhverstaðar á milli 0 og 1, með meiri
   líkum á að lenda á nær miðjunni en fær.
5. Aðilarnir skipta svo pottinum á milli sín í þeim hlutföllum sem
   talan í nr. 4 bendir til. Ef talan var $0.5$ enda báðir aðilar með
   jafnan hlut úr viðskiptunum, ef talan var $1$, fær annar aðilinn
   allt, ef talan var $0$ fær hinn aðilinn allt.
6. Umferðinni lýkur þegar öll pörin hafa skipt fjármunum sín á milli
   eftir ofangreindum reglum.

Ef þið kunnið að lesa JavaScript þá getið þið séð kóðan bak við þetta
hagkerfi `hérna <{filename}/scripts/wealth.js>`_.

Núna getið þið séð hvers vegna þessi auðsöfnun á sér stað. Eigið fé á
hverjum tímapunkti setur efri mörk á það hvað maður getur grætt á
hverjum viðskiptum. Ef ég á 150kr. get ég vænst að græða helminginn af
meðal fjárhagi hvers þátttakenda plús eigið fé,
þ.e. $\\frac{150+100}{2} = 125\\ \\textrm{kr.}$ Ég get með öðrum orðum vænst þess að
græða örlítið meira en sá sem á einungis 80 kr. Því hærra eigið fé,
þeim mun meira get ég vænst því að græða á viðskiptum. Þeim mun meira
bil milli ríkra og fáttækra, þeim mun meiri líkur á að það aukist.

Og hvað getum við lært á þessu? Jú, aldrei stunda viðskipti við neinn
sem er ríkar en þið, þeir eiga bara eftir að verða ríkari.

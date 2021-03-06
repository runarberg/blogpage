===================
 Kennileiti Eulers
===================

:date: 2013-10-16 12:50
:category: Pælingar
:slug: kennileiti-eulers

Númer 1:
    Það er til tala sem heitir $i$ sem hefur þann eiginleika að
    $i^2 = -1$

Númer 2:
    Það er til tala sem heitir $\\tau = 2\\pi$ og er hlutfall milli
    ummáls hrings og lengd línu frá miðju hans til enda (kölluð
    geisli, eða radíus).

Númer 3:
    Það eru til föll $\\cos x$ og $\\sin x$. Ímyndum okkur
    hring (svokallaðan einingarhring) sem hefur miðju á hnitunum
    $(0, 0)$ og geisla $1$. Nú ef við byrjum á þeim
    punkti á hringjaðrinum sem er lengst til hægri, þ.e. hnitunum
    $(1, 0)$, og ferðumst $\\frac{x}{\\tau}$ hluta hrings
    meðfram jaðrinum, þá endum við á hnitunum $(\\cos x, \\sin x)$.

Númer 5:
    Það er til fall $e^x$ sem vex með hraða $e^x$ í punkti
    $x$.

Númer 6:
    Vöxtur falls $f$ í punktinum $x$—táknaður
    $\\frac{df}{dx}$ eða $f^{\\prime}(x)$\ —er breyting á
    $f(x)$ miðað við örsmáa breytingu á $x$. 

Númer 7:
    Vöxtur $\\sin x$ við punktinn $x$ er $\\cos x$ og
    vöxtur $\\cos x$ við sama punkt er $-\\sin x$.

Númer 8:
    Sum föll af $x$ má nálgast með því að meta fallið, við
    ákveðin punkt $a$ með margliðu af gerðinni

    $$
    f(x) \\approx f(a) + f^{\\prime}(a)(x - a) +
    \\frac{f^{\\prime\\prime}(a)}{2!}(x - a)^2 + \\cdots +
    \\frac{f^{(n)}(a)}{n!}(x - a)^n + \\cdots
    $$
       
    kölluð *Taylor margliða*.

Nú ætla ég að sýna fram á svolítið magnað. Í forsendunum hér að ofan
minntist ég á þrjá fasta. Þeir eru allir svolítið klikkaðir. Engan
þeirra get ég skrifað með venjulegum tölustöfum.

Í fyrsta lagi er það $\\tau = 2\\pi \\approx 6.283185307179586$\ …,
með óendanlega marga aukastafi. Í öðru lagi er það $e = 1 +
\\frac{1}{1} + \\frac{1}{2!} + \\frac{1}{3!} + \\cdots \\approx
2.718281828459045$\ …, líka með óendanlega marga aukastafi, og í
þriðja lagi er það $i$ sem ég get ekki einu sinni reynt að
tákna, hún er svo klikkuð. Það eina sem ég get sagt um $i$ er að
$i^2 = -1$.

Það er því alveg magnað sem ég heyrði um daginn.

$$
e^{i\\tau} = 1.
$$
   
Þessar þrjár klikkuðu tölur, margfeldi tveggja settar sem veldisvísir
þeirra þriðju, verður að einföldustu tölu sem ég get ímyndað
mér. Einn. Ein eining, eitt af einhverju. Mengi alls þess sem er
stakt. Einfaldara verður það ekki.

Hvernig stendur á því að þessar þrjár klikkuðu tölur mynda svona
einfalda og skýra lausn? Jú, sjáum til, útfrá forsendu 8 hér að ofan
getum við nálgað sínus, kósínus, veldismögnunarfallið með Taylor
margliðu. Reyndar verður nálgunin nákvæm þegar margliðan inniheldur
óendanlega marga liði.

Byrjum á veldismögnunarfallinu $e^x$ sem vex um $e^x$ við
punktinn $x$ eins og ég gaf mér í (5). Skoðum Taylor margliðuna
í kringum punkinn $a = 0$\ .

$$
e^x = e^0 + (e^{\\prime})^0(x - 0) +
\\frac{(e^{\\prime\\prime})^0}{2!}(x - 0)^2 + \\cdots +
\\frac{(e^{(n)})^0}{n!}(x - 0)^n + \\cdots .
$$
   
Við vitum að $(e^{\\prime})^0 = e^0 = 1$ svo við getum einfaldað.

$$
e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots +
\\frac{x^n}{n!} + \\cdots
$$
   
Geymum þetta í bili og skoðum Taylor margliðuna af sínus við punktinn
$a = 0$, það er y-hnit ferðalags um einingarhringinn, sem byrjar
í punktinum $(1, 0)$ og endar $\\frac{0}{\\tau}$ hluta
hrings síðar. Eða í einföldum orðum. Skoðum Taylor margliðuna við
$\\sin 0 = 0$.

Ég var búinn að segja í (7) að vöxtur $\\sin x$ við $x$ er
$\\sin^{\\prime} x = \\cos x$ og vöxtur $\\cos x$ við
$x$ er $\\sin^{\\prime\\prime} x = \\cos^{\\prime} x =
-\\sin x$. Og svo heldur þetta áfram… $\\sin^{(3)} x =
\\cos^{\\prime\\prime} x = -\\sin^{\\prime} x = -\\cos x$. Taylor
margliðan lítur því út svo…

$$ \\begin{align}
\\sin x &= \\sin 0 + (\\sin^{\\prime} 0) (x - 0) +
\\frac{\\sin^{\\prime\\prime} 0}{2!}(x - 0)^2 + \\cdots +
\\frac{\\sin^{(n)} 0}{n!}(x - 0)^n + \\cdots \\\\
&= \\sin 0 + (\\cos 0)x - \\frac{\\sin 0}{2!}x^2 -
\\frac{\\cos 0}{3!}x^3 + \\cdots \\\\
&= x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} +
\\cdots
\\end{align} $$

sem sagt, allir oddatöluliðirnir, plúsaðir og mínusaðir saman til
skiptis.

Fyrir kósínus gerist svipað. Nema bara í með slétttölunum í staðin.

$$ \\begin{align}
\\cos x &= \\cos 0 + (\\cos^{\\prime} 0) (x - 0) + \\frac{\\cos^{\\prime
\\prime}  0}{2!}(x - 0)^2 + \\cdots + \\frac{\\cos^{(n)} 0}{n!}
(x - 0)^n + \\cdots \\\\
&= \\cos 0 - (\\sin 0)x - \\frac{\\cos 0}{2!}x^2 +
\\frac{\\cos 0}{3!}x^3 - \\cdots \\\\
&= 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} +
\\cdots
\\end{align} $$

sem meikar alveg sens þar sem við erum að skoða $x$-hnitin af sama
punkti og áðan.

Tökum eftir því hve naumlík hornaföllin (sínus og kósínus) eru
veldismögnunar fallinu. Við gætum næstum plúsað þau saman, ef ekki
væri fyrir þennan mínus sem kemur á milli annanhvern lið í
hornaföllunum. Rifjum því upp fyrstu forsenduna sem ég gaf mér…

Númer 1:
    Það er til tala sem heitir $i$ sem hefur þann eiginleika að
    $i^2 = -1$

og sjáum líka að hækkum við ítrekað veldisvísi $i$ breytist
formerki gildisins með $2/4$ takti,
þ.e. $(+,+,-,-;+,+,-,-)$, en talan skiptir á milli þess að vera
$i$ og $1$ í $1/2$ takti,
þ.e. $(i,1;i,1)$. Það er eins og þessi undraverða tala hafi
verið fædd í þeim tilgangi að passa inn í Taylor margliðuna fyrir
Kósínus og Sínus, því ef við byrjum með $i^0$ og hækkum svo
veldisvísin um einn milli þess sem við plúsum og mínusum liði Taylor
margliðanna fyrir kósínus og sínus, þá fáum við…

$$ \\begin{align}
& i^0 + i^1x - i^2\\frac{x^2}{2!} - i^3\\frac{x^3}{3!} +
i^4\\frac{x^4}{4!} + i^5\\frac{x^5}{5!} - i^6\\frac{x^6}{6!} -
\\cdots \\\\
=& 1 + ix - (-1)\\frac{x^2}{2!} - (-i)\\frac{x^3}{3!} +
1\\frac{x^4}{4!} + i\\frac{x^5}{5!} - (-1)\\frac{x^6}{6!} - \\cdots \\\\
=& 1 + ix + \\frac{x^2}{2!} + i\\frac{x^3}{3!} +
\\frac{x^4}{4!} + i\\frac{x^5}{5!} + \\frac{x^6}{6!} + \\cdots
\\end{align} $$
   
sem lýtur nákvæmlega út eins og veldismögnunarfallið, og ef við
margföldum $i$ við veldisvísi $e$, þá fáum við sama
fallið, þ.e. við skrifum formúlu Eulers

$$
e^{ix} = \\cos x + i\\sin x,
$$
   
sem er geðveikt.

Þetta verður betra. Við sáum áðan að kósínus og sínus föllin gefa okkur
$x$ og $y$ hnit eftir að hafa ferðast
$\\frac{x}{\\tau}$ hluta hrings meðfram ummáli einingahringsins
sem byrjar á $(1, 0)$. Ef það er til einhver geðveik tala sem
leyfir okkur að ferðast nákvæmlega einn hring um einingarhringinn, það
er við byrjum á $(1, 0)$ og endum á $(1, 0)$, og það
birtir upp fyrir okkur.

Númer 2:
    Það er til tala sem heitir $\\tau = 2\\pi$ og er hlutfall milli ummáls
    hrings og geisla (það er lengd línu frá miðju hrings út á enda).

Setjum $x = \\tau$ og sjáum að ef við ferðumst
$\\frac{\\tau}{\\tau} = 1$ semsagt heilan hring frá þessum
töfra-punkti, þá endum við aftur á sama staðnum. Við erum jú búinn að
ferðast heilan hring samkvæmt skilgreiningu. Svo að sínus af núll
hlítur að vera jafn mikið og sínus af $\\tau$ og kósínus af núll
hlítur að vera jafn mikið og kósínus af $\\tau$, því við erum að
skoða $x$ og $y$ hnit sama punktsins, þ.e. með táknum
$\\cos 0 = \\cos \\tau = 1$ og $\\sin 0 = \\sin \\tau = 0$.

Sett inn í formúlu Eulers verður þetta

$$ \\begin{align}
e^{i\\tau} &= \\cos \\tau + i\\sin \\tau \\\\
&= 1 + 0 \\\\
&= 1.
\\end{align} $$
             
Ég verð að endurtaka þessa tæru snilld, sem kölluð er kennileiti Eulers.

$$
e^{i\\tau} = 1.
$$

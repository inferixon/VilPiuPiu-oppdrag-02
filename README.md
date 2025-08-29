# VilPiuPiu: Romskipseventyr! 🚀
### @explicitHints true

~package vilpiupiu-assets=github:inferixon/VilPiuPiu-oppdrag-02

## Intro @showdialog

Velkommen til rommet! I dag skal vi lage et spennende romskipspill.

I dette spillet vil du:
- **🚀 Styre et romskip** med piltastene
- **💥 Skyte laser** med A-knappen for å ødelegge asteroider
- **⭐ Samle poeng** ved å treffe asteroider
- **❤️ Passe på livene dine** – ikke krasj!

## Bakgrunn og oppsett 🌌

**La oss starte eventyret!**

Du vil se at **bakgrunnen** allerede er satt opp. 

Nå skal vi sette opp grunnleggende spillverdier:
- :id card: Klikk på ``||info: Info||`` kategorien og finn blokkene ``||info: set score to 0||`` og ``||info: set life to 3||``. Dra begge blokkene inn i den grønne ``||loops(noclick): on start||`` blokken.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
```

## Lag romskipet ditt 🚀

Nå skal vi lage hovedkarakteren –  ditt eget romskip!

- :paper plane: Klikk på ``||sprites: Sprites||`` kategorien og finn blokken ``||sprites: set mySprite to sprite [] of kind Player||``. Legg denne nederst i **on start** blokken. Klikk på mySprite-pilen og opprett en ny variabel som heter **starship**. Klikk på den grå firkanten og velg romskip-bildet fra **My Assets**.
- :paper plane: Fra samme kategori, legg til blokken ``||sprites: set mySprite position to x 0 y 0||``. Endre variabelnavnet til **starship**. Sett **x = 80** og **y = 105**.
- :paper plane: Legg til blokken ``||sprites: set mySprite stay in screen ON||`` slik at skipet ikke kan gå utenfor skjermen. Endre variabelnavnet til **starship**.

⚠️ **Husk alltid å endre standard variabelnavn til det riktige navnet!**


~hint Hva er en Sprite? 🚀

I dataspill er **sprites** objekter som kan programmeres til å gjøre ting. De kan bevege seg, kollidere med hverandre, og reagere på spillerens handlinger.

hint~

~hint Hva er en Variabel? ℹ️

En **variabel** er som en navnelapp du setter på ting i spillet! 

Tenk deg at du har mange esker hjemme. Hvis du setter en lapp med **leker** på en eske, vet du alltid hvor lekene dine er. På samme måte er **starship** navnet på esken som inneholder romskipet ditt.

**Hvorfor bruke variabler?**
- Lettere å huske: **starship** er bedre enn "den blå tingen som flyr".
- Kan gjenbrukes: Vi kan skrive `starship.setParameter` mange andre steder.
- Organisert kode: Alle vet hva `starship` er.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
let starship = sprites.create(assets.image`starship`, SpriteKind.Player)
starship.setPosition(80, 105)
starship.setStayInScreen(true)
```

## Kontroller romskipet 🕹

Nå skal vi gi deg kontroll over romskipet!

- :game pad: Klikk på ``||controller: Controller||`` kategorien og finn blokken ``||controller: move mySprite with buttons||``
Legg denne nederst i **on start** blokken. Endre navnet på variabelen til **starship**. Trykk på pluss-tegnet og sett **vy = 30** for å begrense litt bevegelsen på **y**-aksen.

**Test spillet ditt!** Trykk på ▶️ play-knappen og prøv å bevege romskipet med piltastene.

~hint Hva betyr hastighetsinnstillingene? ⚡️

- **100** er hvor fort romskipet kan bevege seg til høyre og venstre (X-akse).

- **30** er hvor fort det kan bevege seg opp og ned (Y-akse).

Du kan endre disse tallene! Prøv 150 og 50 for et raskere romskip, eller 50 og 20 for et langsommere.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
let starship = sprites.create(assets.image`starship`, SpriteKind.Player)
starship.setPosition(73, 105)
starship.setStayInScreen(true)
controller.moveSprite(starship, 100, 30)
```

## Stjernepartikler ✨

For å gjøre rommet enda mer dynamisk, legger vi til glittrende partikler som beveger seg mot romskipet!

Legg til en ny blokk utenfor alle de andre:

- :circle: Fra ``||game: Game||`` bruk ``||game: on update every||`` og sett det til **100 ms**.
- :random: Inne i den sett inn: ``||logic: if ... then||`` med ``||math: 0 % chance||`` og sett til **33%**.
- :paper plane: Inne i **if-then** blokken sett inn: ``||sprites: set projectile from side||`` for stjernepartikler. Gi variabelens navnet **stjerne** og sett inn bildet **"stjerne"** fra **My Assets**. Sett **vx = 0** og ``||math: pick random 20 to 30||`` for **vy**.
- :paper plane: Legg til ``||sprites: set mySprite position||`` og sett inn ``||math: pick random 0 - 160||`` for **x**-aksen og **0** for **y**-aksen.
- :paper plane: Legg til ``||sprites: change mySprite z (depth) = -1||``. Stjerner flyr ikke over romskipet.
- :paper plane: Legg til ``||sprites: set mySprite AutoDestroy ON||``. AutoDestroy gjør at partikler forsvinner når de forlater skjermen.

**Passer du fortsatt på riktige spritenavn?**

**Test spillet!** Du skal nå se stjerner som faller nedover i bakgrunnen.

~hint Hva er Logic If og Random Percent Chance? 🎲
- **Logic If...then** er som å stille en betinget ordre til datamaskinen: "HVIS noe er sant, GJØR dette". F.eks: "HVIS det regner, TA med paraply"
- **Random Percent Chance** er som å kaste terning eller trekke lodd. 33% betyr at det er 33% sjanse for at noe skjer. Eller omtrent 1 gang av 3 forsøk.

**Sammen** betyr de: 1 av 3 sjanse lag en stjerne hver 300 ms.

Dette gjør at stjernene ikke kommer hele tiden, men bare av og til –  akkurat  som ekte partikler i rommet!✨

hint~

~hint Hva er "hendelse" i programmering? 🎯

En **hendelse** er som å vente på at noe skal skje og reagere på det.
- F.eks **"On game update every n ms"** betyr: "Hver n-te millisekund i spillet, utfør denne koden!"

Det er som å si: "Hver gang klokka tikker, sjekk om du skal lage en stjerne."

hint~

#### ~ tutorialhint

```blocks
game.onUpdateInterval(100, function () {
    if (Math.percentChance(34)) {
        let stjerne = sprites.createProjectileFromSide(assets.image`stjerne`, 0, randint(20, 30))
        stjerne.setPosition(randint(0, 160), 0)
        stjerne.z += -1
        stjerne.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
```

## Farlige asteroider ☄️

Nå trenger vi noen fiender! Vi skal lage asteroider som faller ned fra toppen.

Legg denne blokken **utenfor** alle de andre blokkene:

- :circle: Fra ``||game: Game||``, finn blokken ``||game: on update every||`` og sett **300 ms**.
- :random: Fra ``||logic: Logic||`` kategorien, legg blokken ``||logic: if...then||`` inne i interval-blokken, og sett inn ``||math: 33% percent chance||``.
- :list: Ta en titt inn ``||variables: Variables||`` og lag to nye variabler som heter **asteroid** og **type**.
- :list: Legg til fra ``||variables: Variables||``: ``||variables: set type to||`` og sett inn  ``||math: random 1 to 3||``
- :paper plane: Lag nede ``||sprites: set asteroid to sprite [] of kind Enemy||``.

#### ~ tutorialhint

```blocks
game.onUpdateInterval(500, function () {
    if (Math.percentChance(34)) {
        let type = randint(1, 3)
        let asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Enemy)
    }
})
```

## Animerte asteroider ☄️

La oss gjøre asteroidene mer spennende med animasjoner og bevegelse!

Fortsett å fylle inn inne i **if...then** blokken fra forrige steg. Legg til tre **if...then** blokker for forskjellige asteroid-typer:

- :random: Fra ``||logic: Logic||`` sett inn en til ``||logic: if...then||`` og sett inn betingelsen **type = 1**.
- :refresh: Sett inne i den ``||animation: start animation||``. Endre navnet til **asteroid**, **loop: ON**. Velg en animatsjon fra **My Assets**.
- :round: Dupliser den hele blokken **if...then** som inholder animasjon og legg den nedenfor. Endre **type** til **2** og velg annen animasjon.
- :round: På samme måte for gjør det for **type 3**.

Til slutt, legg til posisjon og bevegelse for asteroidene med blokkene:
- :paper plane: Inne i hoved **if-then** blokken sett inn videre ``||sprites: set asteroid position||`` med ``||math: tilfeldig x fra 0 til 160||``.
- :paper plane: ``||sprites: set asteroid velocity||`` med ``||math: tilfeldig vx fra -3 til 3||``  og tilfeldig **vy** fra...  
- :round: ... og det kommer noe spennende her! Plukk ``||math: operatør 0 + 0||`` og sett den inn i **vy**. Da sett inn ``||math: tilfeldig fra 15 to 25||`` og på annet sted sett variabel ``||Info: score fra Info||``.
- :paper plane: Legg til ``||sprites: change asteroid z = -1||`` og ``||sprites: set asteroid AutoDestroy ON||``


~hint Hvorfor tre forskjellige animasjoner? 🌟

Vi har tre forskjellige asteroidtyper med ulike utsikt og animasjoner. Dette gjør spillet mer visuelt interessant med variasjoner!

hint~

~hint Hvorfor la vi til en score til asteroids hastigheten? 🌟

Dette vil gjøre spillet mer intenst over tid. Jo flere poeng spilleren får, desto vanskeligere blir det å unngå kollisjon med asteroider.

hint~

#### ~ tutorialhint

```blocks
game.onUpdateInterval(500, function () {
    if (Math.percentChance(34)) {
        let ast = randint(1, 3)
        let asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Enemy)
        if (type == 1) {
            animation.runImageAnimation(
            asteroid,
            assets.animation`aster-1`,
            400,
            true
            )
        }
        if (type == 2) {
            animation.runImageAnimation(
            asteroid,
            assets.animation`aster-2`,
            300,
            true
            )
        }
        if (type == 3) {
            animation.runImageAnimation(
            asteroid,
            assets.animation`aster-3`,
            400,
            true
            )
        }
        asteroid.setPosition(randint(0, 160), 0)
        asteroid.setVelocity(randint(-3, 3), randint(15, 25) + info.score())
        asteroid.z += -1
        asteroid.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
```

## Skyt med laser! ⚡️

Tid for **piu piu**! La oss lage en laserkanon.

- :game pad: Klikk på ``||controller: Controller||`` kategorien og finn blokken ``||controller: on A button pressed||``. Legg den ved siden av, som en egen blokk.

Nå skal vi fylle inn hva som skjer når **A-knappen** trykkes:

- :paper plane: Fra ``||sprites: Sprites||``, legg blokken ``||sprites: set mySprite to sprite||`` inne i **A-knapp** blokken. Lag en ny variabel som heter **laser_shot**. Velg bildet **"lasershot-2x"** fra **My Assets**. Endre kind til **Laser**.
- :paper plane: Da må vi knytte lasers posisjonen til romskipet. Da legg til blokkene ``||sprites: set laser_shot position||``. Bruk ``||sprites: starship.x fra Sprites||`` og ``||math: starship.y - 8||``.
- :paper plane: Legg til ``||sprites: set laser_shot velocity||`` med **vx = 0** og **vy = -150**.
- :paper plane: Og selvfølgelig legg til ``||sprites: set laser_shot AutoDestroy||`` også inne i **A-knapp**-blokken.

**Test det!** Trykk A-knappen når du spiller!


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let laser_shot = sprites.create(assets.image`lasershot-2x`, SpriteKind.Laser)
    laser_shot.setPosition(starship.x, starship.y - 8)
    laser_shot.setVelocity(0, -150)
    laser_shot.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Ødelegg asteroider! 💥

Nå skal vi lage det som skjer når laser treffer asteroider! Ja, i programmering må vi beskrive absolutt alt, ellers hvordan skal maskinen vite hva den skal gjøre? 🤷🏻

Legg til denne blokken **utenfor** alle de andre:

- :paper plane: Legg til en ny kollisjon hendelse ``||sprites: on overlap between||`` og velg **Laser** og **Enemy**.
- :paper plane: Inne i **overlap**-blokken ``||sprites: destroy||`` med **fire effect** etter pluss. Dra og slipp **otherSprite** i stedet **mySprite**.
- :id card: Legg også til ``||info: change score by 1||`` for å belønne deg selv. 🏆

**Test det!** Skyt på asteroidene med A-knappen og se dem eksplodere!


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeScoreBy(1)
})
```

## Kollisjon og skade ⚠️

Hva skjer hvis romskipet ditt treffer en asteroide? La oss legge til skade og fare!

Legg til denne blokken **utenfor** alle de andre:

- :paper plane: Legg til annen hendelse ``||sprites: on overlap between Player og Enemy||``.
- :paper plane: Inne i overlap: ``||sprites: destroy otherSprite with fire effect for 300 ms||``
- :id card: Nedere ``||info: change life by -1||``
- :evergreen tree: ``||Scene: camera shake by 10 pixels for 200 ms||`` og ``||Loops: pause 200 ms||``.

Nå legger vi til hva som skjer når du mister alle livene:

- :id card: Legg till en hendelse ``||info: on life zero||`` og inne i den ``||game: game over LOSE||``


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeLifeBy(-1)
    scene.cameraShake(10, 200)
    pause(200)
})

info.onLifeZero(function () {
    game.gameOver(false)
})
```

## Seier! 🏆

La oss legge til en vinnbetingelse! Når du når **100 poeng**, vinner du spillet.

Legg til denne blokken **utenfor** alle de andre:

- :id card: Sett ``||info: on score 100||`` og inne i den ``||game: game over WIN||``

**Gratulerer!** Du har nå laget et komplett romskipspill!


#### ~ tutorialhint

```blocks
info.onScore(100, function () {
    game.gameOver(true)
})
```

## Lydeffekter! 🔊

For å gjøre spillet enda mer spennende, legger vi til lyder!

Gå tilbake til **controller.A.onEvent** og legg til en høy **Skuddlyd**  med skarp triangelbølge som høres ut som "piu piu".

- :headphones: Fra ``||music: Music||``, legg til nederst i **A-knapp**-blokken:
```block
music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
```

Gå til **sprites.onOverlap(Laser, Enemy)** og legg til en støybasert **Eksplosjonslyd** som høres ut som "BOOM".

- :headphones: Fra ``||music: Music||``, legg til nederst i overlap-blokken:
```block
music.play(music.createSoundEffect(WaveShape.Noise, 1, 1534, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```

Gå til **sprites.onOverlap(Player, Enemy)** og legg til en dyp, skummel **Skadenslyd** som forteller at noe galt skjedde.

- :headphones: Fra ``||music: Music||``, legg til først i overlap-blokken:
```block
music.play(music.createSoundEffect(WaveShape.Noise, 1, 147, 99, 0, 404, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```


## Ferdig –  Gratulerer! 🎉

**Fantastisk!** Du har nå laget et komplett romskipspill med:

✅ **Bevegelig romskip** som du styrer med piltastene!  
✅ **Laser-våpen** som skyter når du trykker A!  
✅ **Animerte asteroider** som faller ned fra himmelen!
✅ **Kollisjonssystem** med poeng og liv!
✅ **Stjernepartikler** i bakgrunnen!
✅ **Lydeffekter** for skudd, eksplosjoner og skade!
✅ **Vinn- og tap-betingelser**!

### 🎯 Utfordringer å prøve:

**Enkel:**
- Endre romskipets hastighet
- Skap flere liv i begynnelsen, men øk seiersbetingelsen
- Reduser intervallet eller øk sannsynligheten for asteroider

**Middels:**
- Lag ditt eget romskipdesign
- Lag dine egne våpentyper og skift dem på knappen B

**Vanskelig:**
- Legg til et beskyttende skjold på skipet og containerne for å hente det
- Lag forskjellige typer våpen som kan plukkes opp i rommet fra containere
- Legg til flere typer fiender, målsøkende miner, tårn som vil skyte på spilleren

**Lykke til med videre utforskning av spillprogrammering!** 🌟


```blockconfig.global
let laser: Sprite = null
let starship: Sprite = null
let asteroid: Sprite = null
let stjerne: Sprite = null
```

```template
namespace SpriteKind {
    export const Laser = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`main_bg`)
```

```ghost
let mySprite = sprites.create(null, SpriteKind.Player)
mySprite.setPosition(0, 0)
let mySprite = mySprite.x + mySprite.y
```

```customts
let palBuf: Buffer = hex`000000ffffffff2121ec138fff8135fff609249ca378dc52003fad87f2ffff80ffc6ccd58080805a534934435f000000`
image.setPalette(palBuf)
```


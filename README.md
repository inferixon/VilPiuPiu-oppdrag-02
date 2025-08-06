# VilPiuPiu: Romskipseventyr! 🚀
### @explicitHints true

## {Intro @showdialog}

Velkommen til rommet! I dag skal vi lage et spennende romskipspill:

![Et romskip som skyter på asteroider i verdensrommet](https://st-vilvite2022.nf.cdn.netflexapp.com/vilpiupiu-preview.gif "Pew pew pew!")

I dette spillet vil du:
- **🚀 Styre et romskip** med piltastene
- **💥 Skyte laser** med A-knappen for å ødelegge asteroider
- **⭐ Samle poeng** ved å treffe asteroider
- **❤️ Passe på livene dine** - ikke krasj!

## {Steg 1 - Bakgrunn og oppsett}

**La oss starte eventyret!**

Først skal vi lage bakgrunnen og sette opp grunnleggende verdier.
- :evergreen tree: Klikk på ``||scene: Scene||`` kategorien og finn blokken ``||scene: set background image||``
Dra den inn i den grønne ``||loops(noclick): on start||`` blokken.

- :id card: Klikk på ``||info: Info||`` kategorien og finn blokkene ``||info: set score||`` og ``||info: set life||``
Legg begge under bakgrunnsblokken i ``||loops(noclick): on start||``.

~hint Hva gjør disse blokkene? 🤔

---

**Bakgrunnsbilde** gir oss en flott romskapsebakgrunn, forresten der kan du tegne egne stjerner og planeter.

**Poengsum 0** setter poengsummen til 0 når spillet starter.

**3 liv** gir spilleren 3 liv å starte med.

hint~

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`main_bg`)
//@highlight
info.setScore(0)
//@highlight
info.setLife(3)
```

## {Steg 2 - Romskipet ditt}

Nå skal vi lage hovedkarakteren - ditt eget romskip!

- :paper plane: Klikk på ``||sprites: Sprites||`` kategorien og finn blokken ``||sprites: set mySprite to sprite||``
Legg denne nederst i ``||loops(noclick): on start||`` blokken.

- :round pushpin: Fra samme kategori, legg til blokkene ``||sprites: set mySprite position||`` og ``||sprites: set mySprite stay in screen||``

~hint Hva er en Sprite? 🤖

---

I dataspill er **sprites** objekter som kan programmeres til å gjøre ting. De kan bevege seg, kollidere med hverandre, og reagere på spillerens handlinger.

**SpriteKind.Player** forteller spillet at dette er spillerens karakter, som skiller den fra fiender, kuler, osv.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
//@highlight
starship = sprites.create(assets.image`starship`, SpriteKind.Player)
//@highlight
starship.setPosition(73, 105)
//@highlight
starship.setStayInScreen(true)
```

## {Steg 3 - Kontroller romskipet}

Nå skal vi gi deg kontroll over romskipet!

- :game pad: Klikk på ``||controller: Controller||`` kategorien og finn blokken ``||controller: move mySprite with buttons||``
Legg denne nederst i ``||loops(noclick): on start||`` blokken.

**Test spillet ditt!** Trykk på ▶️ play-knappen og prøv å bevege romskipet med piltastene.

~hint Hva betyr hastighetsinnstillingene? 🏃‍♂️

---

**100** er hvor fort romskipet kan bevege seg til høyre og venstre (X-akse).

**30** er hvor fort det kan bevege seg opp og ned (Y-akse).

Du kan endre disse tallene! Prøv 150 og 50 for et raskere romskip, eller 50 og 20 for et langsommere.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
starship = sprites.create(assets.image`starship`, SpriteKind.Player)
starship.setPosition(73, 105)
starship.setStayInScreen(true)
//@highlight
controller.moveSprite(starship, 100, 30)
```

## {Steg 4 - Skyt laser!}

Tid for action! La oss lage en laserkanon.

Denne blokken skal **IKKE** være inne i ``||loops(noclick): on start||``. Legg den ved siden av, som en egen blokk:

- :game pad: Klikk på ``||controller: Controller||`` kategorien og finn blokken ``||controller: on A button pressed||``

Nå skal vi fylle inn hva som skjer når A-knappen trykkes:

- :paper plane: Fra ``||sprites: Sprites||``, legg blokken ``||sprites: set projectile to sprite||`` **inne i** A-knapp-blokken

- :round pushpin: Legg til blokkene ``||sprites: set mySprite position||``, ``||sprites: set mySprite velocity||`` og ``||sprites: set mySprite AutoDestroy||`` også inne i A-knapp-blokken

**Test det!** Trykk A-knappen når du spiller!

~hint Hvordan fungerer laser-skytingen? ⚡

---

**sprites.create()** lager en ny laser-sprite hver gang du trykker A.

**setPosition()** plasserer laseren ved romskipets posisjon (litt foran).

**setVelocity(0, -150)** får laseren til å bevege seg oppover med fart 150.

**AutoDestroy** gjør at laseren forsvinner når den forlater skjermen.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
starship = sprites.create(assets.image`starship`, SpriteKind.Player)
starship.setPosition(73, 105)
starship.setStayInScreen(true)
controller.moveSprite(starship, 100, 30)

//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    laser = sprites.create(assets.image`lasershot-2x`, SpriteKind.Weapon)
    //@highlight
    laser.setPosition(starship.x - 0, starship.y - 8)
    //@highlight
    laser.setVelocity(0, -150)
    //@highlight
    laser.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## {Steg 5 - Farlige asteroider!}

Nå trenger vi noen fiender! Vi skal lage asteroider som faller ned fra toppen.

Legg denne blokken **utenfor** alle de andre blokkene:

- :circle: Fra ``||game: Game||``, finn blokken ``||game: on update interval||``

Nå skal vi fylle inn hva som skjer hver 500. millisekund (hvert halve sekund):

- :arrows counterclockwise: Fra ``||logic: Logic||`` kategorien, legg blokken ``||logic: if||`` inne i interval-blokken, og velg ``||heavy multiplication x: random percent chance||``

Inne i if-blokken skal vi lage asteroider. Legg til:

- :list: Fra ``||variables: Variables||``: ``||variables: set ast to||`` og velg ``||heavy multiplication x: random||``

- :paper plane: Fra ``||sprites: Sprites||``: ``||sprites: set mySprite to sprite||``

~hint Hvorfor 34% sjanse? 🎲

---

Med 34% sjanse hver 500ms får vi omtrent en ny asteroide hvert 1.5 sekund. Dette gir passe utfordring - ikke for lett, ikke for vanskelig!

Du kan prøve andre tall, som 50% for flere asteroider eller 20% for færre.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
starship = sprites.create(assets.image`starship`, SpriteKind.Player)
starship.setPosition(73, 105)
starship.setStayInScreen(true)
controller.moveSprite(starship, 100, 30)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.create(assets.image`lasershot-2x`, SpriteKind.Weapon)
    laser.setPosition(starship.x - 0, starship.y - 8)
    laser.setVelocity(0, -150)
    laser.setFlag(SpriteFlag.AutoDestroy, true)
})

//@highlight
game.onUpdateInterval(500, function () {
    //@highlight
    if (Math.percentChance(34)) {
        //@highlight
        ast = randint(1, 3)
        //@highlight
        asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Asteroid)
    }
})
```

## {Steg 6 - Animerte asteroider}

La oss gjøre asteroidene mer spennende med animasjoner og bevegelse!

Fortsett å fylle inn **inne i** if-blokken fra forrige steg. Legg til tre if-blokker for forskjellige asteroid-typer:

- :arrows counterclockwise: Fra ``||logic: Logic||`` legg til ``||logic: if ast = 1||`` og inne i den: ``||sprites: start animation||``

- :arrows counterclockwise: På samme måte for ``||logic: if ast = 2||`` og ``||logic: if ast = 3||``

Til slutt, legg til posisjon og bevegelse for asteroidene med blokkene:
``||sprites: set mySprite position||``, ``||sprites: set mySprite velocity||``, ``||sprites: change mySprite z||`` og ``||sprites: set mySprite AutoDestroy||``

~hint Hvorfor tre forskjellige animasjoner? 🌟

---

Vi har tre forskjellige asteroidtyper med ulike animasjonshastigheter:
- **aster-1**: roterer hvert 444ms
- **aster-2**: roterer hvert 333ms  
- **aster-3**: roterer hvert 399ms

Dette gjør spillet mer visuelt interessant med variasjon!

hint~

#### ~ tutorialhint

```blocks
game.onUpdateInterval(500, function () {
    if (Math.percentChance(34)) {
        ast = randint(1, 3)
        asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Asteroid)
        //@highlight
        if (ast == 1) {
            //@highlight
            animation.runImageAnimation(
            //@highlight
            asteroid,
            //@highlight
            assets.animation`aster-1`,
            //@highlight
            444,
            //@highlight
            true
            //@highlight
            )
        }
        //@highlight
        if (ast == 2) {
            //@highlight
            animation.runImageAnimation(
            //@highlight
            asteroid,
            //@highlight
            assets.animation`aster-2`,
            //@highlight
            333,
            //@highlight
            true
            //@highlight
            )
        }
        //@highlight
        if (ast == 3) {
            //@highlight
            animation.runImageAnimation(
            //@highlight
            asteroid,
            //@highlight
            assets.animation`aster-3`,
            //@highlight
            399,
            //@highlight
            true
            //@highlight
            )
        }
        //@highlight
        asteroid.setPosition(randint(0, 160), 0)
        //@highlight
        asteroid.setVelocity(randint(-3, 3), randint(15, 25) + info.score())
        //@highlight
        asteroid.z += -5
        //@highlight
        asteroid.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
```

## {Steg 7 - Stjernepartikler}

For å gjøre rommet enda mer magisk, legger vi til glittrende stjerner!

Legg til en ny blokk **utenfor** alle de andre:

- :circle: Fra ``||game: Game||``: ``||game: on update interval||`` (sett til 100ms)
- :arrows counterclockwise: Inne i den: ``||logic: if||`` med ``||heavy multiplication x: random percent chance||``  
- :paper plane: Inne i if: ``||sprites: set projectile from side||`` for stjernepartikler
- :round pushpin: Legg til ``||sprites: set mySprite position||``, ``||sprites: change mySprite z||`` og ``||sprites: set mySprite AutoDestroy||``

**Test spillet!** Du skal nå se blinkende stjerner som faller nedover i bakgrunnen.

~hint Forskjell på asteroider og stjerner? ✨

---

**Asteroider** er fiender som du må unngå eller skyte.

**Stjerner** er bare kosmetiske effekter som gjør spillet vakrere - de påvirker ikke gameplay.

**z += -6** sender stjernene bak alt annet så de er i bakgrunnen.

hint~

#### ~ tutorialhint

```blocks
game.onUpdateInterval(500, function () {
    if (Math.percentChance(34)) {
        ast = randint(1, 3)
        asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Asteroid)
        if (ast == 1) {
            animation.runImageAnimation(
            asteroid,
            assets.animation`aster-1`,
            444,
            true
            )
        }
        if (ast == 2) {
            animation.runImageAnimation(
            asteroid,
            assets.animation`aster-2`,
            333,
            true
            )
        }
        if (ast == 3) {
            animation.runImageAnimation(
            asteroid,
            assets.animation`aster-3`,
            399,
            true
            )
        }
        asteroid.setPosition(randint(0, 160), 0)
        asteroid.setVelocity(randint(-3, 3), randint(15, 25) + info.score())
        asteroid.z += -5
        asteroid.setFlag(SpriteFlag.AutoDestroy, true)
    }
})

//@highlight
game.onUpdateInterval(100, function () {
    //@highlight
    if (Math.percentChance(34)) {
        //@highlight
        stjerne = sprites.createProjectileFromSide(assets.image`stjerne`, 0, randint(20, 30))
        //@highlight
        stjerne.setPosition(randint(0, 160), 0)
        //@highlight
        stjerne.z += -6
        //@highlight
        stjerne.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
```

## {Steg 8 - Skyt ned asteroider! 💥}

Nå skal vi lage det som skjer når laser treffer en asteroide!

Legg til denne blokken **utenfor** alle de andre:

- :paper plane: Fra ``||sprites: Sprites||``: ``||sprites: on overlap between||`` og velg ``||sprites: Weapon||`` og ``||sprites: Asteroid||``
- :round pushpin: Inne i overlap-blokken: ``||sprites: destroy||`` med ``||sprites: fire effect||``  
- :id card: Legg også til ``||info: change score by||``

**Test det!** Skyt på asteroidene med A-knappen og se dem eksplodere!

~hint Hva skjer når laser treffer asteroide? 🔥

---

**sprites.destroy()** ødelegger asteroiden med en flammeeffekt.

**effects.fire** gir en kul flammeanimasjon.

**300** er hvor lenge effekten varer i millisekunder.

**info.changeScoreBy(1)** gir deg 1 poeng for hver asteroide du treffer!

hint~

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.create(assets.image`lasershot-2x`, SpriteKind.Weapon)
    laser.setPosition(starship.x - 0, starship.y - 8)
    laser.setVelocity(0, -150)
    laser.setFlag(SpriteFlag.AutoDestroy, true)
})

//@highlight
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    //@highlight
    sprites.destroy(otherSprite, effects.fire, 300)
    //@highlight
    info.changeScoreBy(1)
})
```

## {Steg 9 - Kollisjon og skade ⚠️}

Hva skjer hvis romskipet ditt treffer en asteroide? La oss legge til skade og fare!

Legg til denne blokken **utenfor** alle de andre:

- :paper plane: Fra ``||sprites: Sprites||``: ``||sprites: on overlap between||`` og velg ``||sprites: Player||`` og ``||sprites: Asteroid||``
- :round pushpin: Inne i overlap: ``||sprites: destroy||``, ``||info: change life by||``, ``||evergreen tree: camera shake||`` og ``||arrows counterclockwise: pause||``

Nå legger vi til hva som skjer når du mister alle livene:

- :id card: Fra ``||info: Info||``: ``||info: on life zero||`` og inne i den ``||game: game over LOSE||``

~hint Hva skjer ved kollisjon? 💀

---

**sprites.destroy()** ødelegger asteroiden som traff deg.

**info.changeLifeBy(-1)** tar bort ett liv.

**scene.cameraShake()** rister skjermen for dramatisk effekt!

**pause(200)** gir deg litt tid til å reagere.

**game.gameOver(false)** avslutter spillet hvis du mister alle liv.

hint~

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeScoreBy(1)
})

//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    //@highlight
    sprites.destroy(otherSprite, effects.fire, 300)
    //@highlight
    info.changeLifeBy(-1)
    //@highlight
    scene.cameraShake(10, 200)
    //@highlight
    pause(200)
})

//@highlight
info.onLifeZero(function () {
    //@highlight
    game.gameOver(false)
})
```

## {Steg 10 - Seier! 🏆}

La oss legge til en vinnbetingelse! Når du når 100 poeng, vinner du spillet.

Legg til denne blokken **utenfor** alle de andre:

- :id card: Fra ``||info: Info||``: ``||info: on score||`` (sett til 100) og inne i den ``||game: game over WIN||``

**Gratulerer!** Du har nå laget et komplett romskipspill!
d, function (sprite, otherSprite) {
    //@highlight
    sprites.destroy(otherSprite, effects.fire, 300)
    //@highlight
    info.changeLifeBy(-1)
    //@highlight
    scene.cameraShake(10, 200)
    //@highlight
    pause(200)
})

//@highlight
info.onLifeZero(function () {
    //@highlight
    game.gameOver(false)
})
```

## {Steg 10 - Seier! 🏆}

La oss legge til en vinnbetingelse! Når du når 100 poeng, vinner du spillet.

Legg til denne blokken **utenfor** alle de andre:

- :id card: Fra ``||info: Info||``:
```block
info.onScore(100, function () {
    game.gameOver(true)
})
```

**Gratulerer!** Du har nå laget et komplett romskipspill! 

~hint Hvordan vinne spillet? 🎯

---

**info.onScore(100)** sjekker om du har nådd 100 poeng.

**game.gameOver(true)** avslutter spillet med seier!

Du kan endre tallet 100 til et annet tall hvis du vil gjøre spillet lettere (som 50) eller vanskeligere (som 200).

hint~

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeScoreBy(1)
})

//@highlight
info.onScore(100, function () {
    //@highlight
    game.gameOver(true)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeLifeBy(-1)
    scene.cameraShake(10, 200)
    pause(200)
})

info.onLifeZero(function () {
    game.gameOver(false)
})
```

## {Steg 11 - Lydeffekter! 🔊}

For å gjøre spillet enda mer spennende, legger vi til lyder!

Gå tilbake til **controller.A.onEvent**-blokken og legg til denne lyden når du skyter:

- :headphones: Fra ``||music: Music||``, legg til nederst i A-knapp-blokken:
```block
music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
```

Gå til **sprites.onOverlap(Weapon, Asteroid)**-blokken og legg til eksplosjonslyd:

- :headphones: Fra ``||music: Music||``, legg til nederst i overlap-blokken:
```block
music.play(music.createSoundEffect(WaveShape.Noise, 1, 1534, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```

Gå til **sprites.onOverlap(Player, Asteroid)**-blokken og legg til skadenslyd øverst:

- :headphones: Fra ``||music: Music||``, legg til først i overlap-blokken:
```block
music.play(music.createSoundEffect(WaveShape.Noise, 1, 147, 99, 0, 404, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```

~hint Hvorfor lyder? 🎵

---

**Skuddlyd**: En høy, skarp triangelbølge som høres ut som "pew pew!"

**Eksplosjonslyd**: En støybasert lyd som høres ut som "BOOM!"

**Skadenslyd**: En dyp, skummel støy som forteller at noe galt skjedde.

Lyder gjør spillet mye mer engasjerende og gir umiddelbar tilbakemelding til spilleren!

hint~

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.create(assets.image`lasershot-2x`, SpriteKind.Weapon)
    laser.setPosition(starship.x - 0, starship.y - 8)
    laser.setVelocity(0, -150)
    laser.setFlag(SpriteFlag.AutoDestroy, true)
    //@highlight
    music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})

sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeScoreBy(1)
    //@highlight
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 1534, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    //@highlight
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 147, 99, 0, 404, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeLifeBy(-1)
    scene.cameraShake(10, 200)
    pause(200)
})
```

## {Ferdig - Gratulerer! 🎉}

**Fantastisk!** Du har nå laget et komplett romskipspill med:

✅ **Bevegelig romskip** som du styrer med piltastene  
✅ **Laser-våpen** som skyter når du trykker A  
✅ **Animerte asteroider** som faller ned fra himmelen  
✅ **Kollisjonssystem** med poeng og liv  
✅ **Vakre stjernepartikler** i bakgrunnen  
✅ **Lydeffekter** for skudd, eksplosjoner og skade  
✅ **Vinn- og tap-betingelser**  

### 🎯 Utfordringer å prøve:

**Lett:**
- Endre hastigheten på romskipet
- Endre hvor mange poeng som trengs for å vinne
- Endre sannsynligheten for asteroider

**Middels:**
- Lag flere liv ved start
- Endre asteroidenes hastighet
- Lag din egen romskipsdesign

**Vanskelig:**
- Legg til power-ups
- Lag forskjellige våpentyper
- Legg til flere fiendertyper

### 🚀 Neste steg:
Nå som du har lært grunnleggende spillprogrammering, kan du utforske mer avanserte konsepter som:
- Kompleks spillogikk
- Flere levels
- Save/load-funksjonalitet
- Multiplayer

**Lykke til med videre utforskning av spillprogrammering!** 🌟

---

*Dette spillet er laget som en del av VilVite's programmeringsverksted. For mer informasjon om våre kurs, besøk [vilvite.no](https://vilvite.no)*

```blockconfig.global
sprites.create(assets.image`starship`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 30)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    
})
game.onUpdate(function () {
    
})
game.onUpdateInterval(1000, function () {
    
})
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
let projectile = sprites.createProjectileFromSprite(assets.image`lasershot-2x`, mySprite, 0, -150)
let enemy = sprites.create(assets.image`ast_null`, SpriteKind.Asteroid)
enemy.setPosition(randint(10, 150), 10)
enemy.setVelocity(randint(-50, 50), 50)
sprites.destroy(sprite)
sprites.destroy(otherSprite, effects.fire, 500)
info.changeScoreBy(1)
info.changeLifeBy(-1)
game.gameOver(false)
music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
```

```template
// Start med tom kode - elevene skal bygge alt selv!
namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
}
```

```ghost
let laser: Sprite = null
let starship: Sprite = null
let asteroid: Sprite = null
let stjerne: Sprite = null
let ast = 0
```

```assetjson
{
    "README.md": " ",
    "assets.json": "",
    "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
    "main.ts": "namespace SpriteKind {\n    export const Weapon = SpriteKind.create()\n    export const Asteroid = SpriteKind.create()\n}",
    "pxt.json": "{\n    \"name\": \"VilPiuPiu-oppdrag-02\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"controller\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"testFiles\": [],\n    \"targetVersions\": {\n        \"target\": \"2.0.56\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"blocksprj\"\n}",
    "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQBAAEAAAABAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"stjerne\"\n    },\n    \"image19\": {\n        \"data\": \"hwQRABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCZmZlpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQmZmZaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"lasershot-2x\"\n    },\n    \"\": {\n        \"data\": \"hwQBAAEAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ast_null\"\n    },\n    \"image29\": {\n        \"data\": \"hwQRABAAAAAAAAAAAAAAAEAAAAADgvhvBAAAAAMzMEdwAAMywwRHBDcC73Bzc3dwAALAc0djNDQAAyxGIjBzLANAcgcjMG7FFHBGImby7ywDQHIHIzBuxRQDLEYiMHMsAALAc0djNDQDAu9wc3N3cAAAAzLDBEcENAAAAAMzMEdwAAAAA4L4bwQAAAAAAAAAQ\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"starship\"\n    },\n    \"image32\": {\n        \"data\": \"hwSgAHgAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"main_bg\"\n    },\n    \"anim5\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim5\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YmMwMTExMDAxMTAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwMDAwZWVlZDBlMDAwMDAwMDAwMGRlY2NkYzBlMDAwMDAwMDBkZWNjZGNkYzBlMDAwMDAwZGVjY2RjZWNkZDAwMDAwMGUwY2NlZGNjY2RlZDAwMDAwMGRlY2NlZGNjZGMwMDAwMDAwMGRlY2RjZGRjMGUwMDAwMDAwMGVlZGRkZDBlMDAwMDAwMDAwMGUwZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGVlMGUwMDAwMDAwMDAwMDBkZWRjMGUwMDAwMDAwMDAwZGVjY2RjMGUwMDAwMDAwMGUwY2RjZGRjMGUwMDAwMDBlMGNkZWRjY2VjMDAwMDAwMDBkZWVkZGNjY2VkMDAwMDAwZTBjZGNjZGNlYzAwMDAwMDAwZDBjY2VkZGMwZTAwMDAwMDAwZGVjY2RkMGUwMDAwMDAwMDAwZGVkZDBlMDAwMDAwMDAwMDAwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWUwMDAwMDAwMDAwMDBkZWRkZWQwZTAwMDAwMDAwZGVjY2NkZGQwZTAwMDAwMGQwY2NlY2NkZGMwZTAwMDBlMGNkY2RlY2NkZWMwMDAwMDBkMGVkZGNjY2RjMGUwMDAwMDBkZWRjY2NkYzBlMDAwMDAwMDBkZWNjZGMwZTAwMDAwMDAwMDBlZWVkMGUwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwMDAwMDAwMDAwMDAwMDBkZWRkMGUwMDAwMDAwMDAwZGVjZGRjMGUwMDAwMDAwMGRlZWNjZGRjMDAwMDAwMDBlMGRjY2NjY2VkMDAwMDAwZTBjZGRjZWNkZDBlMDAwMDAwZTBjY2VjY2RlZDAwMDAwMDAwZGVjY2NkZWQwMDAwMDAwMDAwZGVjY2RjMGUwMDAwMDAwMDAwZGVkYzBlMDAwMDAwMDAwMDAwZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"aster-1\"\n    },\n    \"anim6\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim6\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NGQwMTExMDAxMTAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwMDAwMDAwMDAwMDAwMDBlMGVkMDAwMDAwMDAwMDAwZWVjZDBkMDAwMDAwMDAwMGRlY2NjYzBlMDAwMDAwMDBkZWNjZGRkYzAwMDAwMDAwZGVkY2NkZGNlZDAwMDAwMGUwY2RjY2NjZGMwZTAwMDAwMGUwY2NjY2NkZGMwZTAwMDAwMGRlY2NkZGVkMGUwMDAwMDAwMGRlZGRlZDBlMDAwMDAwMDAwMGUwZWQwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwMGUwMDAwMDAwMDAwMDBlZWRkMGUwMDAwMDAwMDAwZGVjY2RjMGUwMDAwMDAwMGQwY2NkY2RjMGUwMDAwMDBlMGNkY2NjZGVjMDAwMDAwMDBkZGNkY2NjZGVkMDAwMDAwZTBkZGNkZGNjY2VkMDAwMDAwZWVjZGRjY2NlZDAwMDAwMDAwZWVkY2RkMGUwMDAwMDAwMDAwZGVlZTAwMDAwMDAwMDAwMDAwMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGVlZWQwMDAwMDAwMDAwMDBlZWRkZGQwZTAwMDAwMDAwZWVkZGNkZGMwZTAwMDAwMGRlY2NjZGNjZWMwMDAwMDAwMGRlY2NjY2NjZWQwMDAwMDBlMGRkY2NkZGRjMGUwMDAwMDBkMGRjY2RkYzBlMDAwMDAwMDBjZWNjZGMwZTAwMDAwMDAwMDBjZGVkMGUwMDAwMDAwMDAwZTBlZDAwMDAwMDAwMDAwMDAwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwZTBkZTBlMDAwMDAwMDAwMGRlZGRlYzBlMDAwMDAwZTBjZGRjY2NlZDBlMDAwMGUwY2RkY2NjZGRlZDAwMDAwMGUwY2RjZGNjZGQwZDAwMDAwMGUwY2NjZGNjZWQwMDAwMDAwMGRlZGNjY2RjMDAwMDAwMDAwMGRlY2NkYzBlMDAwMDAwMDAwMGRlZWQwZTAwMDAwMDAwMDAwMGVlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw\",\n        \"displayName\": \"aster-2\"\n    },\n    \"anim7\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim7\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"OGYwMTExMDAxMTAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwMDAwMDAwMDAwMDAwMDBlMGNkZWQwMDAwMDAwMDAwZTBjZGNjZWQwMDAwMDAwMGUwY2RjZGNjZWQwMDAwMDAwMGNlY2RkY2NjMGUwMDAwMDBlMGNkY2RkZGVjMDAwMDAwMDBlMGNkY2NkYzBlMDAwMDAwMDBlMGNkZGMwZTAwMDAwMDAwMDBlMGVkMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWUwZTAwMDAwMDAwMDBlMGNkZGMwZTAwMDAwMDAwZTBjZGRjZGMwZTAwMDAwMGUwY2RkY2NkZWMwMDAwMDAwMGNlY2NjY2NjMGQwMDAwMDBlMGNkY2RjZGVkMDAwMDAwMDBlMGNkY2RlZDAwMDAwMDAwMDBlMGNkZWQwMDAwMDAwMDAwMDBlMGVlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZWVlZDAwMDAwMDAwMDAwMGRlY2NlZDAwMDAwMDAwMDBkZWNjY2NlZDAwMDAwMDBlMGRjY2RjZGVkMDAwMDAwMDBjZWRjY2NjZDBlMDAwMDBlMGNkY2NjZGVkMDAwMDAwMDBlMGNkY2NlZDAwMDAwMDAwMDBlMGNkZWQwMDAwMDAwMDAwMDBlMGVlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZTAwMDAwMDAwMDAwZTBjZGVkMDAwMDAwMDAwMGUwY2RjZGVkMDAwMDAwMGUwY2RjZGNkZWQwMDAwMDAwMGNkY2NjY2NjMGUwMDAwMGUwY2NkZGNjZWQwMDAwMDAwMGRlZGNjY2VkMDAwMDAwMDAwMGRlY2NlZDAwMDAwMDAwMDAwMGVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw\",\n        \"displayName\": \"aster-3\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}\n```

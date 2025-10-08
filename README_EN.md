# VilPiuPiu: Space Adventure! 🚀
### @explicitHints true

## Intro @showdialog

Welcome to space! Today we're going to create an exciting spaceship game.

In this game you will:
- **🚀 Control a spaceship** with arrow keys
- **💥 Shoot lasers** with the A button to destroy asteroids
- **⭐ Collect points** by hitting asteroids
- **❤️ Watch your lives** – don't crash!

## Background and setup 🌌

**Let's start the adventure!**

You'll see that the **background** is already set up.

Now let's set up basic game values:
- :id card: Click on the ``||info: Info||`` category and find the blocks ``||info: set score to 0||`` and ``||info: set life to 3||``. Drag both blocks into the green ``||loops(noclick): on start||`` block.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
```

## Create your spaceship 🚀

Now let's create the main character – your own spaceship!

- :paper plane: Click on the ``||sprites: Sprites||`` category and find the block ``||sprites: set mySprite to sprite [] of kind Player||``. Place this at the bottom of the **on start** block. Click on the mySprite arrow and create a new variable called **starship**. Click on the gray square and select the spaceship image from **My Assets**.
- :paper plane: From the same category, add the block ``||sprites: set mySprite position to x 0 y 0||``. Change the variable name to **starship**. Set **x = 80** and **y = 105**.
- :paper plane: Add the block ``||sprites: set mySprite stay in screen ON||`` so the ship can't go off screen. Change the variable name to **starship**.

⚠️ **Always remember to change the default variable name to the correct name!**


~hint What is a Sprite? 🚀

In video games, **sprites** are objects that can be programmed to do things. They can move, collide with each other, and react to the player's actions.

hint~

~hint What is a Variable? ℹ️

A **variable** is like a name tag you put on things in the game!

Imagine you have many boxes at home. If you put a label with **toys** on a box, you always know where your toys are. Similarly, **starship** is the name of the box containing your spaceship.

**Why use variables?**
- Easier to remember: **starship** is better than "the blue thing that flies".
- Can be reused: We can write `starship.setParameter` in many other places.
- Organized code: Everyone knows what `starship` is.

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

## Control the spaceship 🕹

Now let's give you control over the spaceship!

- :game pad: Click on the ``||controller: Controller||`` category and find the block ``||controller: move mySprite with buttons||``
Place this at the bottom of the **on start** block. Change the variable name to **starship**. Click on the plus sign and set **vy = 30** to slightly limit movement on the **y**-axis.

**Test your game!** Press the ▶️ play button and try moving the spaceship with the arrow keys.

~hint What do the speed settings mean? ⚡️

- **100** is how fast the spaceship can move left and right (X-axis).

- **30** is how fast it can move up and down (Y-axis).

You can change these numbers! Try 150 and 50 for a faster spaceship, or 50 and 20 for a slower one.

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

## Star particles ✨

To make space even more dynamic, let's add glittering particles that move towards the spaceship!

Add a new block outside all the others:

- :circle: From ``||game: Game||`` use ``||game: on update every||`` and set it to **100 ms**.
- :random: Inside it, insert: ``||logic: if ... then||`` with ``||math: 0 % chance||`` and set to **33%**.
- :paper plane: Inside the **if-then** block insert: ``||sprites: set projectile from side||`` for star particles. Give the variable the name **stjerne** and insert the **"stjerne"** image from **My Assets**. Set **vx = 0** and ``||math: pick random 20 to 30||`` for **vy**.
- :paper plane: Add ``||sprites: set mySprite position||`` and insert ``||math: pick random 0 - 160||`` for the **x**-axis and **0** for the **y**-axis.
- :paper plane: Add ``||sprites: change mySprite z (depth) = -1||``. Stars don't fly over the spaceship.
- :paper plane: Add ``||sprites: set mySprite AutoDestroy ON||``. AutoDestroy makes particles disappear when they leave the screen.

**Are you still using the correct sprite names?**

**Test the game!** You should now see stars falling down in the background.

~hint What is Logic If and Random Percent Chance? 🎲
- **Logic If...then** is like giving a conditional order to the computer: "IF something is true, DO this". For example: "IF it rains, BRING an umbrella"
- **Random Percent Chance** is like rolling dice or drawing lots. 33% means there's a 33% chance something will happen. Or about 1 time out of 3 attempts.

**Together** they mean: 1 in 3 chance create a star every 300 ms.

This ensures stars don't come all the time, but only occasionally – just like real particles in space!✨

hint~

~hint What is an "event" in programming? 🎯

An **event** is like waiting for something to happen and reacting to it.
- For example **"On game update every n ms"** means: "Every nth millisecond in the game, execute this code!"

It's like saying: "Every time the clock ticks, check if you should create a star."

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

## Dangerous asteroids ☄️

Now we need some enemies! Let's create asteroids that fall from the top.

Place this block **outside** all other blocks:

- :circle: From ``||game: Game||``, find the block ``||game: on update every||`` and set **300 ms**.
- :random: From the ``||logic: Logic||`` category, place the block ``||logic: if...then||`` inside the interval block, and insert ``||math: 33% percent chance||``.
- :list: Take a look inside ``||variables: Variables||`` and create two new variables called **asteroid** and **type**.
- :list: Add from ``||variables: Variables||``: ``||variables: set type to||`` and insert ``||math: random 1 to 3||``
- :paper plane: Create below ``||sprites: set asteroid to sprite [] of kind Enemy||``.

#### ~ tutorialhint

```blocks
game.onUpdateInterval(500, function () {
    if (Math.percentChance(34)) {
        let type = randint(1, 3)
        let asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Enemy)
    }
})
```

## Animated asteroids ☄️

Let's make the asteroids more exciting with animations and movement!

Continue filling inside the **if...then** block from the previous step. Add three **if...then** blocks for different asteroid types:

- :random: From ``||logic: Logic||`` insert another ``||logic: if...then||`` and insert the condition **type = 1**.
- :refresh: Set inside it ``||animation: start animation||``. Change the name to **asteroid**, **loop: ON**. Select an animation from **My Assets**.
- :round: Duplicate the entire **if...then** block that contains animation and place it below. Change **type** to **2** and select another animation.
- :round: Do the same for **type 3**.

Finally, add position and movement for the asteroids with the blocks:
- :paper plane: Inside the main **if-then** block insert further ``||sprites: set asteroid position||`` with ``||math: random x from 0 to 160||``.
- :paper plane: ``||sprites: set asteroid velocity||`` with ``||math: random vx from -3 to 3||`` and random **vy** from...
- :round: ... and here comes something exciting! Pick ``||math: operator 0 + 0||`` and insert it in **vy**. Then insert ``||math: random from 15 to 25||`` and in the other place set variable ``||Info: score from Info||``.
- :paper plane: Add ``||sprites: change asteroid z = -1||`` and ``||sprites: set asteroid AutoDestroy ON||``


~hint Why three different animations? 🌟

We have three different asteroid types with different looks and animations. This makes the game more visually interesting with variations!

hint~

~hint Why did we add score to asteroid speed? 🌟

This will make the game more intense over time. The more points the player gets, the harder it becomes to avoid colliding with asteroids.

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

## Shoot with laser! ⚡️

Time for **piu piu**! Let's create a laser cannon.

- :game pad: Click on the ``||controller: Controller||`` category and find the block ``||controller: on A button pressed||``. Place it next to the others, as a separate block.

Now let's fill in what happens when the **A button** is pressed:

- :paper plane: From ``||sprites: Sprites||``, place the block ``||sprites: set mySprite to sprite||`` inside the **A button** block. Create a new variable called **laser_shot**. Select the **"lasershot-2x"** image from **My Assets**. Change kind to **Laser**.
- :paper plane: Then we need to tie the laser's position to the spaceship. Then add the blocks ``||sprites: set laser_shot position||``. Use ``||sprites: starship.x from Sprites||`` and ``||math: starship.y - 8||``.
- :paper plane: Add ``||sprites: set laser_shot velocity||`` with **vx = 0** and **vy = -150**.
- :paper plane: And of course add ``||sprites: set laser_shot AutoDestroy||`` also inside the **A button** block.

**Test it!** Press the A button when playing!


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let laser_shot = sprites.create(assets.image`lasershot-2x`, SpriteKind.Laser)
    laser_shot.setPosition(starship.x, starship.y - 8)
    laser_shot.setVelocity(0, -150)
    laser_shot.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Destroy asteroids! 💥

Now let's create what happens when laser hits asteroids! Yes, in programming we have to describe absolutely everything, otherwise how will the machine know what to do? 🤷🏻

Add this block **outside** all the others:

- :paper plane: Add a new collision event ``||sprites: on overlap between||`` and select **Laser** and **Enemy**.
- :paper plane: Inside the **overlap** block ``||sprites: destroy||`` with **fire effect** after plus. Drag and drop **otherSprite** instead of **mySprite**.
- :id card: Also add ``||info: change score by 1||`` to reward yourself. 🏆

**Test it!** Shoot at the asteroids with the A button and see them explode!


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeScoreBy(1)
})
```

## Collision and damage ⚠️

What happens if your spaceship hits an asteroid? Let's add damage and danger!

Add this block **outside** all the others:

- :paper plane: Add another event ``||sprites: on overlap between Player and Enemy||``.
- :paper plane: Inside overlap: ``||sprites: destroy otherSprite with fire effect for 300 ms||``
- :id card: Below ``||info: change life by -1||``
- :evergreen tree: ``||Scene: camera shake by 10 pixels for 200 ms||`` and ``||Loops: pause 200 ms||``.

Now let's add what happens when you lose all lives:

- :id card: Add an event ``||info: on life zero||`` and inside it ``||game: game over LOSE||``


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

## Victory! 🏆

Let's add a win condition! When you reach **100 points**, you win the game.

Add this block **outside** all the others:

- :id card: Set ``||info: on score 100||`` and inside it ``||game: game over WIN||``

**Congratulations!** You have now created a complete spaceship game!


#### ~ tutorialhint

```blocks
info.onScore(100, function () {
    game.gameOver(true)
})
```

## Sound effects! 🔊

To make the game even more exciting, let's add sounds!

Go back to **controller.A.onEvent** and add a high **Shot sound** with a sharp triangle wave that sounds like "piu piu".

- :headphones: From ``||music: Music||``, add at the bottom of the **A button** block:
```block
music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
```

Go to **sprites.onOverlap(Laser, Enemy)** and add a noise-based **Explosion sound** that sounds like "BOOM".

- :headphones: From ``||music: Music||``, add at the bottom of the overlap block:
```block
music.play(music.createSoundEffect(WaveShape.Noise, 1, 1534, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```

Go to **sprites.onOverlap(Player, Enemy)** and add a deep, scary **Damage sound** that tells you something bad happened.

- :headphones: From ``||music: Music||``, add first in the overlap block:
```block
music.play(music.createSoundEffect(WaveShape.Noise, 1, 147, 99, 0, 404, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```


## Done – Congratulations! 🎉

**Amazing!** You have now created a complete spaceship game with:

✅ **Movable spaceship** that you control with arrow keys!  
✅ **Laser weapon** that shoots when you press A!  
✅ **Animated asteroids** falling from the sky!
✅ **Collision system** with points and lives!
✅ **Star particles** in the background!
✅ **Sound effects** for shots, explosions and damage!
✅ **Win and lose conditions**!

### 🎯 Challenges to try:

**Easy:**
- Change the spaceship's speed
- Create more lives at the beginning, but increase the victory condition
- Reduce the interval or increase the probability for asteroids

**Medium:**
- Create your own spaceship design
- Create your own weapon types and switch them with button B

**Hard:**
- Add a protective shield to the ship and containers to pick it up
- Create different types of weapons that can be picked up in space from containers
- Add more types of enemies, homing mines, turrets that will shoot at the player

**Good luck with further exploration of game programming!** 🌟


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

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQBAAEAAAABAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"stjerne\"\n    },\n    \"image19\": {\n        \"data\": \"hwQRABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCZmZlpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQmZmZaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"lasershot-2x\"\n    },\n    \"\": {\n        \"data\": \"hwQBAAEAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ast_null\"\n    },\n    \"image29\": {\n        \"data\": \"hwQRABAAAAAAAAAAAAAAEAAAAADgvhvBAAAAAMzMEdwAAMywwRHBDcC73Bzc3dwAALAc0djNDQAAyxGIjBzLANAcgcjMG7FFHBGImby7ywDQHIHIzBuxRQDLEYiMHMsAALAc0djNDQDAu9wc3N3cAAAAzLDBEcENAAAAAMzMEdwAAAAA4L4bwQAAAAAAAAAQ\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"starship\"\n    },\n    \"image32\": {\n        \"data\": \"hwSgAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"main_bg\"\n    },\n    \"anim5\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim5\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YmMwMTExMDAxMTAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwMDAwZWVlZDBlMDAwMDAwMDAwMGRlY2NkYzBlMDAwMDAwMDBkZWNjZGNkYzBlMDAwMDAwZGVjY2RjZWNkZDAwMDAwMGUwY2NlZGNjY2RlZDAwMDAwMGRlY2NlZGNjZGMwMDAwMDAwMGRlY2RjZGRjMGUwMDAwMDAwMGVlZGRkZDBlMDAwMDAwMDAwMGUwZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGVlMGUwMDAwMDAwMDAwMDBkZWRjMGUwMDAwMDAwMDAwZGVjY2RjMGUwMDAwMDAwMGUwY2RjZGRjMGUwMDAwMDBlMGNkZWRjY2VjMDAwMDAwMDBkZWVkZGNjY2VkMDAwMDAwZTBjZGNjZGNlYzAwMDAwMDAwZDBjY2VkZGMwZTAwMDAwMDAwZGVjY2RkMGUwMDAwMDAwMDAwZGVkZDBlMDAwMDAwMDAwMDAwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWUwMDAwMDAwMDAwMDBkZWRkZWQwZTAwMDAwMDAwZGVjY2NkZGQwZTAwMDAwMGQwY2NlY2NkZGMwZTAwMDBlMGNkY2RlY2NkZWMwMDAwMDBkMGVkZGNjY2RjMGUwMDAwMDBkZWRjY2NkYzBlMDAwMDAwMDBkZWNjZGMwZTAwMDAwMDAwMDBlZWVkMGUwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwMDAwZGVkZDBlMDAwMDAwMDAwMGRlY2RkYzBlMDAwMDAwMDBkZWVjY2RkYzAwMDAwMDAwZTBkY2NjY2NlZDAwMDAwMGUwY2RkY2VjZGQwZTAwMDAwMGUwY2NlY2NkZWQwMDAwMDAwMGRlY2NjZGVkMDAwMDAwMDAwMGRlY2NkYzBlMDAwMDAwMDAwMGRlZGMwZTAwMDAwMDAwMDAwMGVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw\",\n        \"displayName\": \"aster-1\"\n    },\n    \"anim7\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim7\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"OGYwMTExMDAxMTAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZTAwMDAwMDAwMDAwMGUwY2RlZDAwMDAwMDAwMDBlMGNkY2NlZDAwMDAwMDAwZTBjZGNkY2NlZDAwMDAwMDAwY2VjZGRjY2MwZTAwMDAwMGUwY2RjZGRkZWMwMDAwMDAwMGUwY2RjY2RjMGUwMDAwMDAwMGUwY2RkYzBlMDAwMDAwMDAwMGUwZWQwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlMGUwMDAwMDAwMDAwZTBjZGRjMGUwMDAwMDAwMGUwY2RkY2RjMGUwMDAwMDBlMGNkZGNjZGVjMDAwMDAwMDBjZWNjY2NjYzBkMDAwMDAwZTBjZGNkY2RlZDAwMDAwMDAwZTBjZGNkZWQwMDAwMDAwMDAwZTBjZGVkMDAwMDAwMDAwMDAwZTBlZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGVlZWQwMDAwMDAwMDAwMDBkZWNjZWQwMDAwMDAwMDAwZGVjY2NjZWQwMDAwMDAwMGUwZGNjZGNkZWQwMDAwMDAwMGNlZGNjY2NkMGUwMDAwMDBlMGNkY2NjZGVkMDAwMDAwMDBlMGNkY2NlZDAwMDAwMDAwMDBlMGNkZWQwMDAwMDAwMDAwMDBlMGVlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZTAwMDAwMDAwMDAwMGUwY2RlZDAwMDAwMDAwMDBlMGNkY2RlZDAwMDAwMDAwZTBjZGNkY2RlZDAwMDAwMDAwY2RjY2NjY2MwZTAwMDAwMGUwY2NkZGNjZWQwMDAwMDAwMGRlZGNjY2VkMDAwMDAwMDAwMGRlY2NlZDAwMDAwMDAwMDAwMGVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw\",\n        \"displayName\": \"aster-3\"\n    },\n    \"anim6\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim6\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NGQwMTExMDAxMTAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwMDAwMDAwMDAwMDAwMDBlMGVkMDAwMDAwMDAwMDAwZWVjZDBkMDAwMDAwMDAwMGRlY2NjYzBlMDAwMDAwMDBkZWNjZGRkYzAwMDAwMDAwZGVkY2NkZGNlZDAwMDAwMGUwY2RjY2NjZGMwZTAwMDAwMGUwY2NjY2NkZGMwZTAwMDAwMGRlY2NkZGVkMGUwMDAwMDAwMGRlZGRlZDBlMDAwMDAwMDAwMGUwZWQwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwMGUwMDAwMDAwMDAwMDBlZWRkMGUwMDAwMDAwMDAwZGVjY2RjMGUwMDAwMDAwMGQwY2NkY2RjMGUwMDAwMDBlMGNkY2NjZGVjMDAwMDAwMDBkZGNkY2NjZGVkMDAwMDAwZTBkZGNkZGNjY2VkMDAwMDAwZWVjZGRjY2NlZDAwMDAwMDAwZWVkY2RkMGUwMDAwMDAwMDAwZGVlZTAwMDAwMDAwMDAwMDAwMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGVlZWQwMDAwMDAwMDAwMDBlZWRkZGQwZTAwMDAwMDAwZWVkZGNkZGMwZTAwMDAwMGRlY2NjZGNjZWMwMDAwMDAwMGRlY2NjY2NjZWQwMDAwMDBlMGRkY2NkZGRjMGUwMDAwMDBkMGRjY2RkYzBlMDAwMDAwMDBjZWNjZGMwZTAwMDAwMDAwMDBjZGVkMGUwMDAwMDAwMDAwZTBlZDAwMDAwMDAwMDAwMDAwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlMDAwMDAwMDAwMDAwZTBkZTBlMDAwMDAwMDAwMGRlZGRlYzBlMDAwMDAwZTBjZGRjY2NlZDBlMDAwMGUwY2RkY2NjZGRlZDAwMDAwMGUwY2RjZGNjZGQwZDAwMDAwMGUwY2NjZGNjZWQwMDAwMDAwMGRlZGNjY2RjMDAwMDAwMDAwMGRlY2NkYzBlMDAwMDAwMDAwMGRlZWQwZTAwMDAwMDAwMDAwMGVlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw\",\n        \"displayName\": \"aster-2\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\\nnamespace myImages {\\n\\n    helpers._registerFactory(\\\"image\\\", function(name: string) {\\n        switch(helpers.stringTrim(name)) {\\n            case \\\"image1\\\":\\n            case \\\"stjerne\\\":return img`\\n1 \\n`;\\n            case \\\"image19\\\":\\n            case \\\"lasershot-2x\\\":return img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 9 . . . . . . . 9 . . . . \\n. . . . 6 . . . . . . . 6 . . . . \\n`;\\n            case \\\"ast_null\\\":return img`\\n. \\n`;\\n            case \\\"image29\\\":\\n            case \\\"starship\\\":return img`\\n. . . . . . . . c . . . . . . . . \\n. . . . c . . d 1 d . . c . . . . \\n. . . . b . b c 1 c b . b . . . . \\n. . . . b b c 1 1 1 c b b . . . . \\n. . . c c c 1 1 8 1 1 c c c . . . \\n. . . c d 1 1 8 8 8 1 1 d c . . . \\n. . . . c 1 8 8 9 8 8 1 c . . . . \\n. . . b 1 d 8 c 9 c 8 d 1 b . . . \\n. . c 1 c 8 c c c c c 8 c 1 c . . \\n. e c c d d 8 c b c 8 d d c c e . \\n. e c 1 d d c b b b c d d 1 c e . \\n. b c 1 d c 1 1 b 1 1 c d 1 c b . \\n. b 1 1 c d b 1 b 1 b d c 1 1 b . \\n. 1 1 c d . c b c b c . d c 1 1 . \\n. 1 c d . . . 5 . 5 . . . d c 1 . \\n1 c d . . . . 4 . 4 . . . . d c 1 \\n`;\\n        }\\n        return null;\\n    })\\n\\n    helpers._registerFactory(\\\"animation\\\", function(name: string) {\\n        switch(helpers.stringTrim(name)) {\\n            case \\\"aster-1\\\":\\n            case \\\"anim5\\\":return [img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . e . . . . . . . . \\n. . . . . . e e d e e . . . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . e d c c c d c d e . . . . \\n. . . e d c c c d c e d d . . . . \\n. . . e c c d e c c d c d e . . . \\n. . . e d c c d e c c c d . . . . \\n. . . . e d d c d c c d e . . . . \\n. . . . . e e d d d d e . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . e d c d e . . . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . . e d c d c c d e . . . . \\n. . . . e d c d e c c c e . . . . \\n. . . . e d d e c d c c d e . . . \\n. . . . e d c c c c d c e . . . . \\n. . . . . d c c d e c d e . . . . \\n. . . . . e d c c d d e . . . . . \\n. . . . . . e d d d e . . . . . . \\n. . . . . . . . e . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . e d d d d e e . . . . . \\n. . . . e d c c d c d d e . . . . \\n. . . . d c c c e d c c d e . . . \\n. . . e d c d c c e d c c e . . . \\n. . . . d d e c d c c c d e . . . \\n. . . . e d c d c c c d e . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . . . e e d e e . . . . . . \\n. . . . . . . . e . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . e . . . . . . . . \\n. . . . . . e d d d e . . . . . . \\n. . . . . e d d c c d e . . . . . \\n. . . . e d c e d c c d . . . . . \\n. . . . e c d c c c c d e . . . . \\n. . . e d c c d c e d d e . . . . \\n. . . . e c c c e d c d e . . . . \\n. . . . e d c c d c d e . . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . . . e d c d e . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`];\\n            case \\\"aster-3\\\":\\n            case \\\"anim7\\\":return [img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . e d c d e . . . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . e d c d c c c d e . . . . \\n. . . . e c d c c d c c e . . . . \\n. . . . e d c d c d d c e . . . . \\n. . . . . e d c c c c d e . . . . \\n. . . . . . e d c c d e . . . . . \\n. . . . . . . e d e e . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . e e e e . . . . . . \\n. . . . . . e d c c d e . . . . . \\n. . . . . e d c c d c d e . . . . \\n. . . . e d c c d d c c e . . . . \\n. . . . e c c c c c c c d . . . . \\n. . . . e d c d c d c d e . . . . \\n. . . . . e d c d c d e . . . . . \\n. . . . . . e d c d e . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . e e d e . . . . . . . \\n. . . . . e d c c d e . . . . . . \\n. . . . e d c c c c d e . . . . . \\n. . . . e c d d c d c d e . . . . \\n. . . . e c c d c c d c e . . . . \\n. . . . e d c c c d c d e . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . . . e d c d e . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . e e e . . . . . . . \\n. . . . . . e d c d e . . . . . . \\n. . . . . e d c d c d e . . . . . \\n. . . . e d c d c d c d e . . . . \\n. . . . d c c c c c c c e . . . . \\n. . . . e c c d d c c d e . . . . \\n. . . . e d c d c c d e . . . . . \\n. . . . . e d c c d e . . . . . . \\n. . . . . . e e e e . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`];\\n            case \\\"aster-2\\\":\\n            case \\\"anim6\\\":return [img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . e . . . . . . . \\n. . . . . . . . e d e . . . . . . \\n. . . . . . e e d c d . . . . . . \\n. . . . . e d c c c c e . . . . . \\n. . . . e d c c d d c d . . . . . \\n. . . e d c d d c c d d e . . . . \\n. . . e d c c c c c c d e . . . . \\n. . . . e c c c c d c c d e . . . \\n. . . . e d c c d d d e e . . . . \\n. . . . . e d d d d e e . . . . . \\n. . . . . . . e d e e . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . e e . . . . . . . \\n. . . . . . e e d d e . . . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . . d c c c d c d e . . . . \\n. . . . e d c c c d c c e . . . . \\n. . . . d d d c c c d c d e . . . \\n. . . . e d d d c c d c c d e . . \\n. . . . e e d c c d c c d e . . . \\n. . . . . e e c d d d e . . . . . \\n. . . . . . e d e e . . . . . . . \\n. . . . . . . e . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . e e d e . . . . . . . \\n. . . . . e e d d d d e . . . . . \\n. . . . e e d d d c c d e . . . . \\n. . . e d c c d c c c c e . . . . \\n. . . . e d c c c c c c d e . . . \\n. . . . e d d c c d d c d e . . . \\n. . . . . d c d d c c d e . . . . \\n. . . . . e c c c c d e . . . . . \\n. . . . . . d c d e e . . . . . . \\n. . . . . . e d e . . . . . . . . \\n. . . . . . . e . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`, img`\\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . e . . . . . . . \\n. . . . . . . e e d e . . . . . . \\n. . . . . e d d d c e e . . . . . \\n. . . e d c c d c c d e e . . . . \\n. . e d c c d c c d d d e . . . . \\n. . . e d c d c c c d d d . . . . \\n. . . . e c c d c c c d e . . . . \\n. . . . e d c d c c c d . . . . . \\n. . . . . e d c c c d e . . . . . \\n. . . . . . e d d e e . . . . . . \\n. . . . . . . e e . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n. . . . . . . . . . . . . . . . . \\n`];\\n        }\\n        return null;\\n    })\\n\\n    helpers._registerFactory(\\\"song\\\", function(name: string) {\\n        switch(helpers.stringTrim(name)) {\\n\\n        }\\n        return null;\\n    })\\n\\n}\\n// Auto-generated code. Do not edit.\\n"
}
```

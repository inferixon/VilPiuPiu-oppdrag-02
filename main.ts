namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const Explosion = SpriteKind.create()
    export const ContShield = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const Shield = SpriteKind.create()
}
namespace StatusBarKind {
    export const Shield = StatusBarKind.create()
}
function spawnStarship () {
    starship = sprites.create(assets.image`starship`, SpriteKind.Player)
    starship.setPosition(scene.screenWidth() / 2, scene.screenHeight() * 0.8)
    starship.setStayInScreen(true)
    shieldbar.value = 100
    controller.moveSprite(starship, 100, 30)
}
function doStartGame () {
    scene.setBackgroundImage(assets.image`main_bg`)
    info.setScore(0)
    shieldbar = statusbars.create(25, 2, StatusBarKind.Shield)
    shieldbar.setColor(8, 2)
    shieldbar.positionDirection(CollisionDirection.Top)
    shieldbar.setOffsetPadding(-65, 0)
    spawnStarship()
}


sprites.onOverlap(SpriteKind.Player, SpriteKind.ContShield, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    shieldbar.value += randint(5, 20)
    music.play(music.createSoundEffect(WaveShape.Sine, 1132, 2381, 146, 0, 444, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})

function doExplosion (expsprite: Sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 1534, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    explosion = sprites.create(assets.image`explosion-place`, SpriteKind.Explosion)
    explosion.setPosition(expsprite.x, expsprite.y)
    explosion.setVelocity(expsprite.vx, expsprite.vy)
    explosion.z = 1
    explosion.setFlag(SpriteFlag.AutoDestroy, true)
    animation.runImageAnimation(
    explosion,
    assets.animation`explosion`,
    100,
    false
    )
    pause(150)
    sprites.destroy(expsprite)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Shot(1)
})
statusbars.onZero(StatusBarKind.Shield, function (status2) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Shield)
    controller.moveSprite(starship, 0, 0)
    doExplosion(starship)
    pause(1000)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    doExplosion(otherSprite)
    info.changeScoreBy(1)
})

function spawnAsteroid (num3: number) {
    asteroid = sprites.create(assets.image`ast_null`, SpriteKind.Asteroid)
    if (num3 == 1) {
        animation.runImageAnimation(
        asteroid,
        assets.animation`aster-1`,
        444,
        true
        )
    }
    if (num3 == 2) {
        animation.runImageAnimation(
        asteroid,
        assets.animation`aster-2`,
        333,
        true
        )
    }
    if (num3 == 3) {
        animation.runImageAnimation(
        asteroid,
        assets.animation`aster-3`,
        399,
        true
        )
    }
    asteroid.setPosition(randint(0, scene.screenWidth()), 0)
    asteroid.setVelocity(randint(-3, 3), randint(8, 12))
    asteroid.z += -5
    asteroid.setFlag(SpriteFlag.AutoDestroy, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 147, 99, 0, 404, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Shield)
    controller.moveSprite(starship, 4, 2)
    shieldbar.value += randint(-10, -5)
    shielded = sprites.create(assets.image`shield`, SpriteKind.Shield)
    shielded.setPosition(starship.x, starship.y)
    shielded.z += -4
    controller.moveSprite(shielded, 4, 2)
    doExplosion(otherSprite)
    scene.cameraShake(10, 200)
    pause(200)
    sprites.destroyAllSpritesOfKind(SpriteKind.Shield)
    controller.moveSprite(starship, 80, 30)
})
function Shot (num2: number) {
    laser = sprites.create(assets.image`lasershot-2x`, SpriteKind.Weapon)
    laser.setPosition(starship.x - 0, starship.y - 8)
    laser.setVelocity(0, -150)
    laser.setFlag(SpriteFlag.AutoDestroy, true)
    music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
}


sprites.onOverlap(SpriteKind.Weapon, SpriteKind.ContShield, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    doExplosion(otherSprite)
})
let contShield: Sprite = null
let laser: Sprite = null
let shielded: Sprite = null
let asteroid: Sprite = null
let explosion: Sprite = null
let shieldbar: StatusBarSprite = null
let starship: Sprite = null
doStartGame()
game.onUpdateInterval(30000, function () {
    if (info.score() > 30) {
        contShield = sprites.create(assets.image`shield-cont`, SpriteKind.ContShield)
        contShield.setPosition(randint(0, scene.screenWidth()), 0)
        contShield.setVelocity(randint(-1, 1), 15)
        contShield.z += -5
        contShield.setFlag(SpriteFlag.AutoDestroy, true)
    }
})

namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const Explosion = SpriteKind.create()
    export const ContShield = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const Shield = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.create(assets.image`lasershot-2x`, SpriteKind.Weapon)
    laser.setPosition(starship.x - 0, starship.y - 8)
    laser.setVelocity(0, -150)
    laser.setFlag(SpriteFlag.AutoDestroy, true)
    music.play(music.createSoundEffect(WaveShape.Triangle, 1288, 137, 255, 0, 320, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 1534, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
info.onScore(100, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 147, 99, 0, 404, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite, effects.fire, 300)
    info.changeLifeBy(-1)
    scene.cameraShake(10, 200)
    pause(200)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let stjerne: Sprite = null
let asteroid: Sprite = null
let ast = 0
let laser: Sprite = null
let starship: Sprite = null
scene.setBackgroundImage(assets.image`main_bg`)
info.setScore(0)
info.setLife(3)
starship = sprites.create(assets.image`starship`, SpriteKind.Player)
starship.setPosition(73, 105)
starship.setStayInScreen(true)
controller.moveSprite(starship, 100, 30)
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
game.onUpdateInterval(100, function () {
    if (Math.percentChance(34)) {
        stjerne = sprites.createProjectileFromSide(assets.image`stjerne`, 0, randint(20, 30))
        stjerne.setPosition(randint(0, 160), 0)
        stjerne.z += -6
        stjerne.setFlag(SpriteFlag.AutoDestroy, true)
    }
})

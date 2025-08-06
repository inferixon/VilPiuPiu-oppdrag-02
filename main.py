@namespace
class SpriteKind:
    Weapon = SpriteKind.create()
    Explosion = SpriteKind.create()
    ContShield = SpriteKind.create()
    Asteroid = SpriteKind.create()
    Shield = SpriteKind.create()
@namespace
class StatusBarKind:
    Shield2 = StatusBarKind.create()

def on_a_pressed():
    global laser
    laser = sprites.create(assets.image("""
            lasershot-2x
            """),
        SpriteKind.Weapon)
    laser.set_position(starship.x - 0, starship.y - 8)
    laser.set_velocity(0, -150)
    laser.set_flag(SpriteFlag.AUTO_DESTROY, True)
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            1288,
            137,
            255,
            0,
            320,
            SoundExpressionEffect.TREMOLO,
            InterpolationCurve.CURVE),
        music.PlaybackMode.IN_BACKGROUND)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.fire, 300)
    info.change_score_by(1)
    music.play(music.create_sound_effect(WaveShape.NOISE,
            1,
            1534,
            255,
            0,
            150,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.Weapon, SpriteKind.Asteroid, on_on_overlap)

def on_on_score():
    game.game_over(True)
info.on_score(100, on_on_score)

def spawnAsteroid(num3: number):
    global asteroid
    asteroid = sprites.create(assets.image("""
        ast_null
        """), SpriteKind.Asteroid)
    if num3 == 1:
        animation.run_image_animation(asteroid,
            assets.animation("""
                aster-1
                """),
            444,
            True)
    if num3 == 2:
        animation.run_image_animation(asteroid,
            assets.animation("""
                aster-2
                """),
            333,
            True)
    if num3 == 3:
        animation.run_image_animation(asteroid,
            assets.animation("""
                aster-3
                """),
            399,
            True)
    asteroid.set_position(randint(0, 160), 0)
    asteroid.set_velocity(randint(-3, 3), randint(15, 25) + info.score())
    asteroid.z += -5
    asteroid.set_flag(SpriteFlag.AUTO_DESTROY, True)

def on_on_overlap2(sprite2, otherSprite2):
    music.play(music.create_sound_effect(WaveShape.NOISE,
            1,
            147,
            99,
            0,
            404,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(otherSprite2, effects.fire, 300)
    info.change_life_by(-1)
    scene.camera_shake(10, 200)
    pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.Asteroid, on_on_overlap2)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

stjerne: Sprite = None
asteroid: Sprite = None
laser: Sprite = None
starship: Sprite = None
scene.set_background_image(assets.image("""
    main_bg
    """))
info.set_score(0)
info.set_life(3)
starship = sprites.create(assets.image("""
    starship
    """), SpriteKind.player)
starship.set_position(73, 105)
starship.set_stay_in_screen(True)
controller.move_sprite(starship, 100, 30)

def on_update_interval():
    if Math.percent_chance(34):
        spawnAsteroid(randint(1, 3))
game.on_update_interval(500, on_update_interval)

def on_update_interval2():
    global stjerne
    if Math.percent_chance(34):
        stjerne = sprites.create_projectile_from_side(assets.image("""
            stjerne
            """), 0, randint(20, 30))
        stjerne.set_position(randint(0, 160), 0)
        stjerne.z += -6
        stjerne.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(100, on_update_interval2)

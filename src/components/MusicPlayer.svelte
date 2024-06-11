<script lang="ts">
	import { Howl } from 'howler'
	import feather from 'feather-icons'
	import { fly } from 'svelte/transition'

	const playlist: Song[] = [
		{
			title: 'C418 - Sweden',
			file: 'C418  - Sweden - Minecraft Volume Alpha.m4a',
		},
		{
			title: 'Toby Fox - Field of Hopes and Dreams',
			file: 'Field of Hopes and Dreams.mp3',
		},
		{
			title: 'Yasumasa Kitagawa - Partners! ~ The Game Is Afoot',
			file: 'Partners! ~ The Game Is Afoot.mp3',
		},
		{
			title: 'Joseph J. Lilley, Frank Loesser - Jingle Jangle Jingle',
			file: '[I Got Spurs That] Jingle, Jangle, Jingle.mp3',
		},
		{
			title: 'Atsushi Kitajoh - Pull the Trigger',
			file: 'Persona Q2_ New Cinema Labyrinth – Pull the Trigger.mp3',
		},
		{
			title: 'Lyn - Life Will Change',
			file: 'Life Will Change.mp3',
		},
		{
			title: "Blackway & Black Caviar - What's Up Danger",
			file: "Blackway & Black Caviar - What's Up Danger.m4a",
		},
	]

	export let playing = false
	export let index = 0
	export const numberOfSongs = playlist.length
	export function ToggleMusic() {
		playing = !playing
		if (playing) setTimeout(() => play(index), 500)
		else pause()
	}

	let current_duration = '0:00'
	let current_time_played = '0:00'
	let current_percentage_played = 0

	let current_title = ''

	let current_sound: Howl | undefined = undefined

	let volume = 50
	let is_volume_slider_showing = false

	type Song = {
		title: string
		file: string
		howl?: Howl
	}

	function play(index: number) {
		let sound: Howl
		let song = playlist[index]

		if (song.howl) {
			sound = song.howl
		} else {
			sound = song.howl = new Howl({
				src: ['/portfolio/mus/' + song.file],
				html5: true,
				volume: volume / 100,
				onplay: () => {
					current_duration = formatTime(Math.round(sound.duration()))
					current_title = song.title
					requestAnimationFrame(step)
				},
				onseek: () => {
					requestAnimationFrame(step)
				},
				onend: skipForward,
			})
		}

		current_sound = sound
		sound.play()
		playing = true
	}

	function pause() {
		let song = playlist[index]
		if (!song.howl) return

		song.howl.pause()
		playing = false
	}

	function skipForward() {
		if (current_sound) current_sound.stop()

		if (index + 1 >= numberOfSongs) {
			playing = false
			current_sound = undefined
			return
		}

		index++
		play(index)
	}

	function skipBack() {
		if (index <= 0) return
		if (current_sound) current_sound.stop()

		index--
		play(index)
	}

	function step() {
		if (!current_sound) return

		const time_played = current_sound.seek() || 0
		current_time_played = formatTime(Math.round(time_played))

		current_percentage_played =
			Math.round((time_played / current_sound.duration()) * 100000) / 1000

		if (current_sound.playing()) {
			requestAnimationFrame(step)
		}
	}

	function seek(percentage: number) {
		if (current_sound) {
			current_sound.seek(current_sound.duration() * (percentage / 100))
		}
	}

	function stop() {
		if (current_sound) current_sound.stop()
		current_sound = undefined
		index = 0
		playing = false
	}

	function setVolume(newVolume: number) {
		volume = newVolume
		if (current_sound) current_sound.volume(volume / 100)
	}
	$: setVolume(volume)

	function formatTime(secs: number) {
		const minutes = Math.floor(secs / 60) || 0
		const seconds = secs - minutes * 60 || 0

		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
	}
</script>

{#if !!current_sound}
	<div
		id="player"
		class="fixed z-50 bottom-0 left-0 w-full"
		transition:fly={{ y: 200, duration: 600 }}
	>
		<div class="flex justify-center items-center w-full">
			<div class="bg-rose-600 w-full">
				<div
					id="song-player-controls"
					class="flex items-center flex-col-reverse sm:flex-row"
				>
					<div
						class="flex items-center justify-center sm:w-min gap-1 border-t-2 sm:border-t-0 sm:border-r-2 border-white py-2 sm:px-5 w-full transition-all"
					>
						<button
							id="song-previous"
							class="scale-75 disabled:text-gray-300 disabled:cursor-not-allowed"
							disabled={index <= 0}
							on:click={skipBack}
							>{@html feather.icons['skip-back'].toSvg()}</button
						>
						<button id="song-play" class="" on:click={ToggleMusic}
							>{@html playing
								? feather.icons.pause.toSvg()
								: feather.icons.play.toSvg()}</button
						>
						<button
							id="song-next"
							class="scale-75 disabled:text-gray-300 disabled:cursor-not-allowed"
							disabled={index + 1 >= numberOfSongs}
							on:click={skipForward}
							>{@html feather.icons[
								'skip-forward'
							].toSvg()}</button
						>
						<button
							id="song-stop"
							class="mx-4 disabled:text-gray-300 disabled:cursor-not-allowed"
							disabled={!current_sound}
							on:click={stop}
						>
							{@html feather.icons['stop-circle'].toSvg({
								color: 'white',
							})}
						</button>
						<button
							id="song-volume"
							class="flex transition cursor-default"
							on:mouseenter={() =>
								(is_volume_slider_showing = true)}
							on:mouseleave={() =>
								(is_volume_slider_showing = false)}
						>
							<button
								on:pointerup={(e) => {
									console.log(e)

									if (e.pointerType === 'touch') {
										is_volume_slider_showing =
											!is_volume_slider_showing
									} else {
										if (volume === 0) setVolume(50)
										else setVolume(0)
									}
								}}
								class="flex items-center w-6"
							>
								{@html feather.icons[
									volume === 0
										? 'volume-x'
										: volume <= 50
											? 'volume-1'
											: 'volume-2'
								].toSvg()}
							</button>
							<div
								class={`flex gap-1 items-center focus:outline-none overflow-hidden ${is_volume_slider_showing ? 'max-w-32' : 'max-w-0'}`}
								style="transition: max-width 0.2s ease-out;"
							>
								<input
									id="song-volume-slider"
									type="range"
									min="0"
									max="100"
									class="w-24 ml-1 cursor-pointer"
									style={`background-size: ${volume}% 100%`}
									bind:value={volume}
								/>
								<p class="text-sm w-6">
									{volume}
								</p>
							</div>
						</button>
					</div>
					<button
						id="song-progress-wrapper"
						class="w-full relative h-full cursor-pointer"
						on:click={(e) => {
							const player = document.getElementById(
								'song-progress-wrapper',
							)
							if (!player) return

							const player_width = player.clientWidth
							const player_left_offset =
								window.innerWidth - player_width

							const coord_x = e.clientX
							const percentage_of_movement = Math.round(
								((coord_x - player_left_offset) /
									player_width) *
									100,
							)

							seek(percentage_of_movement)
						}}
					>
						<div
							id="song-progress"
							class="bg-rose-800 z-0 absolute w-full h-full py-2 transition-all duration-200"
							style={`width: ${current_percentage_played}%`}
						></div>
						<div
							class="flex w-full justify-between px-5 py-2 z-10 relative"
						>
							<span id="song-time-played"
								>{current_time_played}</span
							>
							<span>{current_title}</span>
							<span id="song-duration">{current_duration}</span>
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	input[type='range'] {
		appearance: none;
		height: 7px;
		background: rgba(255, 255, 255, 0.6);
		background-image: linear-gradient(white, white);
		background-repeat: no-repeat;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 20px;
		width: 10px;
		border-radius: 20%;
		background: #555;
		box-shadow: 0 0 2px 0 #555;
		transition: background 0.3s ease-in-out;
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
	}

	input[type='range']::-moz-range-thumb {
		appearance: none;
		height: 20px;
		width: 10px;
		border-radius: 20%;
		background: #555;
		box-shadow: 0 0 2px 0 #555;
		transition: background 0.3s ease-in-out;
	}

	input[type='range']::-moz-range-track {
		appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
	}
</style>

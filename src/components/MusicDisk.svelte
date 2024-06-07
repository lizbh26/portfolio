<script lang="ts">
	import { flip } from 'svelte/animate'
	import MusicPlayer from './MusicPlayer.svelte'

	let playing = false
	let toggleMusic: () => void
	let songIndex = 0
	let numberOfSongs = 0

	let disk_speed_rpm = 20
	let disk_rotation = 0

	$: playhead_rotation = calculatePlayheadRotation(songIndex)
	$: playing && toggleDisk()

	function calculatePlayheadRotation(songIndex: number) {
		const MIN_ROTATION = 14
		const MAX_ROTATION = 25
		const NO_OF_RIGNS = 7

		const ringIndex = songIndex % NO_OF_RIGNS

		if (songIndex <= 0) return MIN_ROTATION

		const ROTATION_SPACE = MAX_ROTATION - MIN_ROTATION
		const ROTATION_INTERVALS = ROTATION_SPACE / (NO_OF_RIGNS - 1)

		return MIN_ROTATION + ringIndex * ROTATION_INTERVALS
	}

	function toggleDisk() {
		if (playing)
			setTimeout(() => {
				calculateDiskRotation()
			}, 450)
	}

	function calculateDiskRotation() {
		if (!playing) return

		disk_rotation = disk_rotation + 1
		requestAnimationFrame(calculateDiskRotation)
	}
</script>

<div class="flex flex-col">
	<button class="relative" id="music-disk-wrapper" on:click={toggleMusic}>
		<img
			src="/portfolio/img/music_disk/playhead.png"
			id="playhead"
			class="absolute -left-6 top-2 z-20 h-3/4 max-h-full origin-top cursor-pointer transition-all duration-500"
			style={'rotate: ' +
				(playing ? '-' + playhead_rotation + 'deg' : '0deg')}
			alt=""
		/>
		<div
			id="music-disk"
			class="h-60 w-60 cursor-pointer rounded-full bg-neutral-800 p-2 transition"
			style={`rotate: ${disk_rotation + 'deg'}`}
		>
			<div class="m-1 rounded-full border border-neutral-600 p-px">
				<div class="m-1 rounded-full border border-neutral-600 p-px">
					<div class="m-1 rounded-full border border-neutral-600 p-px">
						<div
							class="m-1 rounded-full border border-neutral-600 p-px"
						>
							<div
								class="m-1 rounded-full border border-neutral-600 p-px"
							>
								<div
									class="m-1 rounded-full border border-neutral-600 p-px"
								>
									<div
										class="m-1 rounded-full border border-neutral-600 p-8"
									>
										<img
											src="/portfolio/img/music_disk/disk_center.svg"
											alt=""
											srcset=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</button>
<p class="text-center mt-2">Listen to some of the songs that I love!</p>

</div>
<MusicPlayer
	bind:ToggleMusic={toggleMusic}
	bind:index={songIndex}
	bind:numberOfSongs
	bind:playing
/>

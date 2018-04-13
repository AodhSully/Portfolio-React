var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.load('../src/audio/La Realite.mp3')

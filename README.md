# synthle
A simple synth


Features:
- Web UI  

- Edit OSC 
- Edit Filter [24db LPF]
- Edit ADSR [EG]
- Edit AMP
- Edit LFO (frequency)


```
// Welcome to the starting template! Follow along with the comments below
// to get a brief sense of working with Elementary. Documentation is available
// here: https://docs.elementary.audio/
import {ElementaryWebAudioRenderer as core, el} from 'https://cdn.skypack.dev/@nick-thompson/elementary@v0.10.5';

const ctx = new (window.AudioContext || window.webkitAudioContext)();

// After we've imported and set up our context, we install a load event listener
// so that once the audio backend is ready we can kick off our render
core.on('load', function() {
  // Before actually rendering anything we put a click handler on the button so that
  // this example doesn't start making noise automatically
  document.getElementById('clickMe').addEventListener('click', async function(e) {
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    
    let synthVoice = (hz) => el.mul(
      0.25,
      el.add(
        el.blepsaw(el.mul(hz, 1.001)),
        el.blepsquare(el.mul(hz, 0.994)),
        el.blepsquare(el.mul(hz, 0.501)),
        el.blepsaw(el.mul(hz, 0.496)),
      ),
    );

    // Finally we render a tiny arpeggio example with sine tones. Start here
    // to remix and explore Elementary!
    let train = el.train(4.8);
    let arp = [0, 4, 7, 11, 12, 11, 7, 4].map(x => 261.63 * 0.5 * Math.pow(2, x / 12));

    let modulate = (x, rate, amt) => el.add(x, el.mul(amt, el.cycle(rate)));
    let env = el.adsr(0.01, 0.5, 0, 0.4, train);
    let filt = (x) => el.lowpass(
      el.add(40, el.mul(modulate(1840, 0.05, 1800), env)),
      1,
      x
    );
    
    let dry = el.mul(0.25, filt(synthVoice(el.seq({seq: arp, hold: true}, train))));
    let wet = el.mul(0.25, el.freeverb({name: 'fv'}, 0.94, 0.14, dry));

    core.render(
      el.add(el.mul(0.4, wet), dry),
      el.add(el.mul(0.4, wet), dry),
    );
  });
});

// After installing our load event handler, we initialize the core renderer
// which will spin up the audio backend with the web audio context and fire
// our load event above when ready.
(async function main() {
  let node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });

  node.connect(ctx.destination);
})();
```

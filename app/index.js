import Exercise from './exercise.js';
import LiveStudy from './live-study.js';

window.onload = async () => {
  try {
    const res = await fetch('./config.json');
    const config = await res.json();
    // console.log(config);

    document.getElementById('title').innerHTML = config.title;

    fetch(`.${config.path}/index.json`)
      .then(res => res.json())
      .then(index => {
        // console.log(index)
        const exercisesDir = Exercise.populate(index, index.path, config.buttons);
        // console.log(exercisesDir)
        const liveStudyApp = new LiveStudy(exercisesDir, config);
        const view = liveStudyApp.render();
        document.getElementById('root').appendChild(view);
      })
      .catch(err => console.error(err));

  } catch (err) {
    console.error(err);
  }
};

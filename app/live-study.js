export default class LiveStudy {

  title = 'Live Study';
  exercises = {};

  constructor(exercises, config) {
    this.exercises = exercises;
    this.title = config.title;
  }

  async loadAll(dir) {
    dir = dir || this.exercises;
    if (dir.dirs) {
      dir.dirs.forEach(subDir => this.loadAll(subDir));
    };
    if (dir.exercises) {
      for (let exercise of dir.exercises) {
        try {
          const msg = '--- ' + exercise.path.abs + ' ---';
          eval(await exercise.load(msg));
        } catch (err) {
          console.error(err);
        };
      };
    };
  }

  renderExercises(virDir = this.exercises) {

    const detailsEl = document.createElement('details');
    detailsEl.style = 'margin-top: 1%; margin-bottom: 1%;';

    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = virDir.path;
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    subListEl.style = 'padding-left: 1em';
    if (virDir.exercises) {
      virDir.exercises.forEach(exercise => {
        const exerciseEl = exercise.render();
        const exerciseContainer = document.createElement('div');
        exerciseContainer.style = 'margin-top: 0.5em; margin-bottom: 0.5em;';
        exerciseContainer.appendChild(exerciseEl);
        subListEl.appendChild(exerciseContainer);
      });
    };
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        subListEl.appendChild(subDirEl);
      });
    };
    detailsEl.appendChild(subListEl);
    return detailsEl;
  }

  render() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.innerHTML = this.title;
    container.appendChild(header);

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    const divContainer = document.createElement('div');
    for (let child of Array.from(unWrapped.children)) {
      divContainer.appendChild(child);
    }
    container.appendChild(divContainer)

    return container;
  }
}

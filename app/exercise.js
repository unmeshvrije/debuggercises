export default class Exercise {

  static populate(data, path, config) {
    if (data.files) {
      data.exercises = data.files
        .map(file => new this(file.path, path, config));
    };
    if (data.dirs) {
      data.dirs.forEach(subDir => this.populate(subDir, path + subDir.path, config));
    };
    return data;
    // by side effect
  }

  config = {
    console: false,
    DevTools: true,
    jsTutor: false,
    loupe: false
  };
  path = {
    rel: null,
    abs: null
  };

  constructor(path, dirPath, config) {
    if (typeof path !== 'string') {
      throw new TypeError('path must be a string');
    };
    this.path.rel = path;
    if (dirPath) {
      this.path.abs = dirPath + path;
    }
    if (config) {
      Object.assign(this.config, config);
    }
  }

  load(loadingMsg) {
    // async/await so they log in the correct order
    if (loadingMsg) {
      console.log(loadingMsg);
    };
    return import('..' + this.path.abs);
  }

  async get(studyType) {
    // async/await so they log in the correct order
    try {
      const res = await fetch('.' + this.path.abs, {
        headers: {
          study: studyType
        }
      });
      const code = await res.text();
      return code;
    } catch (err) {
      throw err;
    }
  }

  run(inDebugger) {
    const mode = inDebugger ? 'in Debugger' : 'in console';

    // xhr for a promise-free callstack
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '.' + this.path.abs);
    xhr.setRequestHeader("study", mode);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onload = () => {
      if (xhr.status != 200) {
        console.error(`${xhr.status}: ${xhr.statusText}`);
      } else {
        const code = xhr.response;

        if (inDebugger) {
          console.log('\n--- in Debugger: ' + this.path.rel + ' ----');
          const stepThrough = eval;
          const debuggered = "debugger;\n\n" + code;
          stepThrough(debuggered);
        } else {
          console.log('\n--- running: ' + this.path.rel + ' ----');
          eval(code);
        };
      }
    }
    xhr.onerror = function (err) {
      console.error('unable to load ' + this.path.abs);
    }
  }

  async inJsTutor() {
    try {
      const res = await fetch('.' + this.path.abs, {
        headers: {
          study: 'in JS Tutor'
        }
      });
      if (res.status != 200) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
      const code = await res.text();
      const encodedJST = encodeURIComponent(code);
      const sanitizedJST = encodedJST
        .replace(/\(/g, '%28').replace(/\)/g, '%29')
        .replace(/%09/g, '%20%20');
      const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
      `http://www.pythontutor.com/live.html#code=function%20reverse%28str%29%20%7B%0A%20%20return%20str.split%28''%29.reverse%28%29.join%28''%29%3B%0A%7D%0A%0Aconst%20esrever%20%3D%20reverse%28%22reverse%22%29%3B%20%0Aconsole.assert%28esrever%20%3D%3D%3D%20%22esrever%22,%20%22fdsa%22%29%3B%20%0Aconsole.assert%28esrever%20%3D%3D%3D%20%22esrever%22,%20%22dsaf%22%29%3B%20%0Aconsole.error%28new%20Error%283%29%29%20%0Aconsole.log%28%7B%20e%3A%203,%20x%3A%20null,%20y%3A%20undefined,%20f%3A%20%5Bnull,%20undefined,%203%5D%20%7D%29%20%0Aconsole.log%282,%20%22%602%60%22,%20true%29%20%0Aconsole.log%28undefined,%20null%29%3B%20%0Aconsole.log%28reverse%29%3B%20%0Aconsole.log%28%5B1,%202,%203,%204,%205,%203,%206,%205,%204,%203%5D%29%20%0A4%3B&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false`;
      console.log('\n--- in JS Tutor: ' + this.path.rel + ' ----');
      window.open(jsTutorURL, '_blank');
    } catch (err) {
      console.error(err);
    };
  }

  render() {
    const container = document.createElement('span');

    const nameEl = document.createElement('text');
    nameEl.innerHTML = this.path.rel + ' : ';
    container.appendChild(nameEl);

    if (this.config.console) {
      const runCodeEl = document.createElement('button');
      runCodeEl.innerHTML = 'console';
      runCodeEl.onclick = this.run.bind(this, false);
      container.appendChild(runCodeEl);
      container.appendChild(document.createTextNode(''));
    }
    if (this.config.devTools) {
      const inDebuggerEl = document.createElement('button');
      inDebuggerEl.innerHTML = 'DevTools';
      inDebuggerEl.onclick = this.run.bind(this, true);
      container.appendChild(inDebuggerEl);
    }

    if (this.config.jsTutor) {
      const inJsTutorButton = document.createElement('button');
      inJsTutorButton.innerHTML = 'JS Tutor';
      inJsTutorButton.onclick = this.inJsTutor.bind(this);
      container.appendChild(inJsTutorButton);
    }

    return container;
  }
}


// not using because Loupe is not reliable enough
class Loupable {
  async inLoupe() {
    try {
      const res = await fetch('.' + this.path.abs, {
        headers: {
          study: 'in Loupe'
        }
      });
      if (res.status != 200) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
      const code = await res.text();
      const encoded = encodeURIComponent(btoa(code));
      const loupeURL = "http://latentflip.com/loupe/?code=" + encoded + "!!!"
      console.log('\n--- in Loupe: ' + this.path.rel + ' ----');
      window.open(loupeURL, '_blank');
    } catch (err) {
      console.error(err);
    };
  }

  render() {
    const container = super.render();

    const inLoupeButton = document.createElement('button');
    inLoupeButton.innerHTML = 'in Loupe';
    inLoupeButton.onclick = this.inLoupe.bind(this);

    container.appendChild(inLoupeButton);

    return container;
  }
}

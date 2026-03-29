export const data = [
    {
        type: ['web','script'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/reactProject.png",
        tittle:"C19 Tracker",
        badges:["ReactJS","SETU API's"],
        projectLink:"https://anirbansanu.github.io/c19-tracker/", 
        githubLink:"https://github.com/anirbansanu/c19-tracker",
        desc:"C19-tracker is COVID Tracking Project collects and publishes the most complete Active, Affected, Testing and Vaccinated data available for India states and territories. "
    },
    {
        type: ['web','script'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/reactProject.png",
        tittle:"Card Library",
        badges:["html","css","javascript","React"],
        projectLink:"https://anirbansanu.github.io/card/" ,
        githubLink:"https://github.com/anirbansanu/card",
        desc:"This is a library that allows your user to minimize, maximize and close your HTML elements. You can choose which of the previous interactions are allowed."
    },
    {
        type: ['web','script'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/reactProject.png",
        tittle:"ToDo",
        badges:["html","css","javascript","React"],
        projectLink:"https://anirbansanu.github.io/Todo/",
        githubLink:"https://github.com/anirbansanu/Todo" ,
        desc:"use Todo when you have a deadline, NEED to focus, prioritize and get things done quickly from home or school projects, to dozens of work tasks with sub-tasks and projects." 
    },
    {
        type: ['script'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/hacking.gif",
        tittle:"Backdoor",
        badges:["python","pycharm"],
        projectLink:"https://github.com/anirbansanu/Hacking",
        githubLink:"https://github.com/anirbansanu/Hacking",
        desc:"C19-tracker is COVID Tracking Project collects and publishes the mo"
    },
    {
        type: ['web'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/allinone.png",
        tittle:"Btn-Eff",
        badges:["css"],
        projectLink:"https://anitechtime.000webhostapp.com/css-libs/btn-eff/index.html",
        githubLink:"https://github.com/anirbansanu/btn-eff",
        desc:"btn-eff is a collection of lightly-styled buttons that feature different shapes, sizes and colors. All styles can be called with simple class names. With the minified CSS file coming in at just 4kb, this library is also quite lightweight."
    },
    {
        type: ['web','script'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/htmlcssjsphp.png",
        tittle:"LMail",
        badges:["html","css","javascript","php","mariaDB"],
        projectLink:"https://anitechtime.000webhostapp.com/lock-mail/mail/user/log-in.php",
        githubLink:"https://anitechtime.000webhostapp.com/lock-mail/mail/user/log-in.php",
        desc:"This is mail system which is based on web , it's allow user to send mail for communication." 
    },
    {
        type: ['program'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/esp8266.gif",
        tittle:"Automation",
        badges:["ESP8266","Arduino","java","firebase"],
        projectLink:"", 
        githubLink:"",
        desc:"This is module based Automation project that provides control with wifi and internet enabled devices "
    },
    {
        type: ['program'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/cpp.gif",
        tittle:"DBLite",
        badges:["c++","vscode"],
        projectLink:"https://github.com/anirbansanu/DBLite",
        githubLink:"https://github.com/anirbansanu/DBLite",
        desc:"DBLite is a C++ language library that provides a lightweight disk-based database that doesn't require a separate server process"
    },
    {
        type: ['program'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/arduino.gif",
        tittle:"Home Automation",
        badges:["Arduino","java","Android"],
        projectLink:"", 
        githubLink:"",
        desc:"Home Automation project demonstrates a simple system that allows the user to control it with bluetooth enabled wireless device "
    },
    {
        type: ['web','script'],
        imgPath:"https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/allinone.png",
        tittle:"Heart",
        badges:["html","css","javascript"],
        projectLink:"https://anitechtime.000webhostapp.com/heart.html" ,
        githubLink:"https://anitechtime.000webhostapp.com/heart.html",
        desc:"A Simple animated reaction web app called heart, who react based on input text." 
    }

];
export function getAllData() 
{
    return data;
}
  
  export function getData(id) {
    return data.find(d => d._id === id);
  }
  
  export function saveMovie(movie) {
    let dataInDb = data.find(m => m._id === movie._id) || {};
    dataInDb.name = movie.name;
    //dataInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    dataInDb.numberInStock = movie.numberInStock;
    dataInDb.dailyRentalRate = movie.dailyRentalRate;
  
    if (!dataInDb._id) {
      dataInDb._id = Date.now();
      data.push(dataInDb);
    }
  
    return dataInDb;
  }
  
  export function deleteData(id) {
    let dataInDb = data.find(m => m._id === id);
    data.splice(data.indexOf(dataInDb), 1);
    return dataInDb;
  }
// Sample course data
const courseCodes = {
  CSE: {
    1: ['CSE1101', 'CSE1102', 'EEE1103', 'CHE1104', 'MATH1105', 'SS1106'],
    2: ['CSE1201', 'CSE1202', 'PHY1203', 'MATH1204', 'ENG1205'],
    3: ['CSE2101', 'CSE2102', 'CSE2103', 'EEE2104', 'MATH2105', 'SS2106'],
    4: ['CSE2201', 'CSE2202', 'CSE2203', 'CSE2204', 'CSE2205'],
    5: ['CSE3101', 'CSE3102', 'CSE3103', 'CSE3104', 'MATH3105'],
    6: ['CSE3201', 'CSE3202', 'CSE3203', 'CSE3204', 'STAT3205'],
    7: ['CSE4101', 'CSE4102', 'SS4103'],
    8: ['ECO4201', 'CSE4202', 'SS4203'],
  },
  EEE: {
    1: ['EEE101', 'EEE102', 'EEE103', 'EEE104', 'EEE105', 'EEE106'],
    2: ['EEE201', 'EEE202', 'EEE203', 'EEE204', 'EEE205', 'EEE206'],
    3: ['EEE301', 'EEE302', 'EEE303', 'EEE304', 'EEE305', 'EEE306'],
    4: ['EEE401', 'EEE402', 'EEE403', 'EEE404', 'EEE405', 'EEE406'],
    5: ['EEE501', 'EEE502', 'EEE503', 'EEE504', 'EEE505', 'EEE506'],
    6: ['EEE601', 'EEE602', 'EEE603', 'EEE604', 'EEE605', 'EEE606'],
    7: ['EEE701', 'EEE702', 'EEE703', 'EEE704', 'EEE705', 'EEE706'],
    8: ['EEE801', 'EEE802', 'EEE803', 'EEE804', 'EEE805', 'EEE806'],
  },
  CE: {
    1: ['CE101', 'CE102', 'CE103', 'CE104', 'CE105', 'CE106'],
    2: ['CE201', 'CE202', 'CE203', 'CE204', 'CE205', 'CE206'],
    3: ['CE301', 'CE302', 'CE303', 'CE304', 'CE305', 'CE306'],
    4: ['CE401', 'CE402', 'CE403', 'CE404', 'CE405', 'CE406'],
    5: ['CE501', 'CE502', 'CE503', 'CE504', 'CE505', 'CE506'],
    6: ['CE601', 'CE602', 'CE603', 'CE604', 'CE605', 'CE606'],
    7: ['CE701', 'CE702', 'CE703', 'CE704', 'CE705', 'CE706'],
    8: ['CE801', 'CE802', 'CE803', 'CE804', 'CE805', 'CE806'],
  },
};

// Google Drive links for each course
// Replace these URLs with your actual Google Drive folder URLs
const driveLinks = {
  CSE: {
    1: {
      CSE1101: {
        notes: {
          MEC: 'https://drive.google.com/drive/folders/your-folder-id',
          FEC: 'https://drive.google.com/drive/folders/your-folder-id',
          NITER: 'https://drive.google.com/drive/folders/your-folder-id',
        },
        books: 'https://drive.google.com/drive/folders/your-folder-id',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/folders/your-folder-id',
          FEC: 'https://drive.google.com/drive/folders/your-folder-id',
          NITER: 'https://drive.google.com/drive/folders/your-folder-id',
        },
        finalExam: 'https://drive.google.com/drive/folders/your-folder-id',
      },

      CSE1102: {
        notes: {
          MEC: 'https://drive.google.com',
        },
      },
      // Add similar structure for other courses
    },
    4: {
      CSE2201: {
        notes: {
          MEC: 'https://drive.google.com',
        },
      },
    },
    // Add similar structure for other semesters
  },
  // Add similar structure for other departments
};

// DOM Elements
const departmentSelect = document.getElementById('department');
const semesterSelect = document.getElementById('semester');
const proceedButton = document.getElementById('proceed');
const courseContent = document.getElementById('courseContent');
const resourceContent = document.getElementById('resourceContent');
const courseList = document.getElementById('courseList');
const headerInfo = document.getElementById('headerInfo');
const courseHeader = document.getElementById('courseHeader');
const backButton = document.getElementById('backButton');
const clockElement = document.getElementById('clock');

let currentDepartment = '';
let currentSemester = '';
let currentCourse = '';

// Event Listeners
proceedButton.addEventListener('click', showCourses);
backButton.addEventListener('click', () => {
  resourceContent.style.display = 'none';
  courseContent.style.display = 'block';
});

function showCourses() {
  const department = departmentSelect.value;
  const semester = semesterSelect.value;

  if (!department || !semester) {
    alert('Please select both department and semester');
    return;
  }

  currentDepartment = department;
  currentSemester = semester;

  const courses = courseCodes[department][semester];
  headerInfo.textContent = `${department} Department - ${semester}${getSemesterSuffix(
    semester
  )} Semester`;

  courseList.innerHTML = '';
  courses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.textContent = course;
    courseCard.addEventListener('click', () => showResources(course));
    courseList.appendChild(courseCard);
  });

  courseContent.style.display = 'block';
}

function showResources(courseCode) {
  currentCourse = courseCode;
  courseHeader.textContent = `Course: ${courseCode}`;
  courseContent.style.display = 'none';
  resourceContent.style.display = 'block';
}

function openDriveFolder(category, subcategory = null) {
  const courseData =
    driveLinks[currentDepartment]?.[currentSemester]?.[currentCourse];

  if (!courseData) {
    alert('No resources available for this course yet.');
    return;
  }

  let link;
  if (subcategory) {
    link = courseData[category]?.[subcategory];
  } else {
    link = courseData[category];
  }

  if (link) {
    window.open(link, '_blank');
  } else {
    alert('No resources available in this folder yet.');
  }
}

function getSemesterSuffix(semester) {
  const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    4: 'th',
    5: 'th',
    6: 'th',
    7: 'th',
    8: 'th',
  };
  return suffixes[semester];
}

// Initialize folder click handlers
document.querySelectorAll('.resource-category a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const folder = e.target.getAttribute('data-folder');

    if (folder === 'books') {
      openDriveFolder('books');
    } else if (folder === 'final') {
      openDriveFolder('finalExam');
    } else {
      // For MEC, FEC, NITER folders
      const category = e.target
        .closest('.resource-category')
        .querySelector('h3')
        .textContent.toLowerCase()
        .replace(' ', '');
      if (category === 'notes' || category === 'ctquestions') {
        openDriveFolder(category, folder);
      }
    }
  });
});

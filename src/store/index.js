import { createStore } from 'vuex'
import {showCourseTime} from '../util/showCourseTime'
export default createStore({
  state: {
    userid: window.sessionStorage.getItem('id'),             //null or id   all
    term: JSON.parse(window.sessionStorage.getItem('term')),  //all
    status: window.sessionStorage.getItem('status'),          //all
    name: window.sessionStorage.getItem('name'),              //all
    enGrade: window.sessionStorage.getItem('enGrade'),        //stu
    totalCredit: window.sessionStorage.getItem('totalCredit'),  //stu
    lastTermGrade: window.sessionStorage.getItem('lastTermGrade'),  //stu
    // teachingInfo:[{lessonName: '数据库原理(1)', lessonId: '02', tName: 'lwq', place: 'C102', time:'二11-13,四1-2',credit: 4, tId: 1002, resolveTime:'五3-4', resolvePlace: 'D102', school: '延长'},
    // {lessonName: '数据库原理(2)', lessonId: '03', tName: 'lwq', place: 'C102', time:'二1-3,四11-12',credit: 4, tId: 1002, resolveTime:'五3-4', resolvePlace: 'D102', school: '延长'}],
    lessonInfo: JSON.parse(window.sessionStorage.getItem('lessonInfo')),
    // lessonInfo:[{lessonName: '数据结构', lessonId: '01', tName: 'sj', place: 'C101', time:'一1-3,三1-2',credit: 5, tId: 1001, resolveTime:'五1-2', resolvePlace: 'D101', school: '宝山', grade: '4.0', result: '97'},
    // {lessonName: '数据库原理', lessonId: '02', tName: 'lwq', place: 'C102', time:'二11-13,四1-2',credit: 4, tId: 1002, resolveTime:'五3-4', resolvePlace: 'D102', school: '延长', grade: '3.0', result: '80'}],
    // stuInfo:[{id: '18120158', name: 'lt', gender: '男', grade: 4.0, usualResult: 90, finalExam: 95, tel: '15821225698'},
    //                 {id: '00000001', name: 'zs', gender: '女', grade: 3.7, usualResult: 87, finalExam: 88, tel: '110'}
    //         ],
    // stuInfo:JSON.parse(window.sessionStorage.getItem('stuInfo')),     
    teachingInfo: JSON.parse(window.sessionStorage.getItem('teachingInfo')),   //teacher
    termInfo: JSON.parse(window.sessionStorage.getItem('termInfo')),  //admin
    showAlert: window.sessionStorage.getItem('showAlert')
  },
  getters:{
    credit: state =>{
      let c = 0;
      if(state.lessonInfo){
        for (let item of state.lessonInfo){
          c += Number(item.course.credit);
        }
      }
      return c;
    },
    lessonTableInfo: state =>{
      function getCol(day){
        if (day == '一') return 2;
        else if (day == '二') return 3;
        else if (day == '三') return 4;
        else if (day == '四') return 5;
        else if (day == '五') return 6;
      }
      function getRow(hour){
          return Number(hour) - 1;
      }
      let table = [[1, '8:00 ~ 8:45', '', '', '', '', '', '', ''],
                  [2, '8:55 ~ 9:40', '', '', '', '', '', '', ''],
                  [3, '10:00 ~ 10:45', '', '', '', '', '', '', ''],
                  [4, '10:55 ~ 11:40', '', '', '', '', '', '', ''],
                  [5, '12:10 ~ 12:55', '', '', '', '', '', '', ''],
                  [6, '13:05 ~ 13:50', '', '', '', '', '', '', ''],
                  [7, '14:10 ~ 14:55', '', '', '', '', '', '', ''],
                  [8, '15:05 ~ 15:50', '', '', '', '', '', '', ''],
                  [9, '16:00 ~ 16:45', '', '', '', '', '', '', ''],
                  [10, '16:55 ~ 17:40', '', '', '', '', '', '', ''],
                  [11, '18:00 ~ 18:45', '', '', '', '', '', '', ''],
                  [12, '18:55 ~ 19:40', '', '', '', '', '', '', ''],
                  [13, '19:50 ~ 20:35', '', '', '', '', '', '', '']];
      if(state.lessonInfo){
        for (let i = 0; i < state.lessonInfo.length; i++){
          let time = showCourseTime(state.lessonInfo[i].course.courseTimes)
          let timeArray = time.split(',');
          for (let j = 0; j < timeArray.length; j++){
              let hour = timeArray[j].substring(1, timeArray[j].length);
              let hourArray = hour.split('-');
              for (let k = getRow(hourArray[0]); k <= getRow(hourArray[1]); k++){
                  table[k][getCol(timeArray[j][0])] = String.fromCharCode(i + 65);
              }
          }
        }
      }
      return table;
    }
  },
  mutations: {
    updateUserid(state, uid){
      state.userid = uid;
      window.sessionStorage.setItem('id', uid);
    },
    updateStatus(state, s){
      state.status = s;
      window.sessionStorage.setItem('status', s);
    },
    updateTerm(state, term){
      state.term = term;
      window.sessionStorage.setItem('term', JSON.stringify(term));
    },
    updateCredit(state, c){
      state.credit = c;
      window.sessionStorage.setItem('credit', c)
    },
    updateLessonInfo(state, info){
      state.lessonInfo = info;
      window.sessionStorage.setItem('lessonInfo', JSON.stringify(state.lessonInfo));
    },
    addLessonInfo(state, info){
      state.lessonInfo.push(info);
      window.sessionStorage.setItem('lessonInfo', JSON.stringify(state.lessonInfo));
    },
    dropCourses(state, dropInfo){
      state.lessonInfo.splice(dropInfo, 1);
      window.sessionStorage.setItem('lessonInfo', JSON.stringify(state.lessonInfo));
    },
    updataTermInfo(state, t){
      state.termInfo = t;
      window.sessionStorage.setItem('termInfo', JSON.stringify(t));
    },
    updateName(state, n){
      state.name = n;
      window.sessionStorage.setItem('name', n);
    },
    updateEnGrade(state, e){
      state.enGrade = e;
      window.sessionStorage.setItem('enGrade', e);
    },
    updateLastTermGrade(state,l){
      state.lastTermGrade = l;
      window.sessionStorage.setItem('lastTermGrade', l)
    },
    // updateStuInfo(state, s){
    //   state.stuInfo = s;
    //   window.sessionStorage.setItem('stuInfo', JSON.stringify(s));
    // }
    updateTeachingInfo(state, t){
      state.teachingInfo = t;
      window.sessionStorage.setItem('teachingInfo', JSON.stringify(t));
    },
    updateShowAlert(state, s){
      state.showAlert = s;
      window.sessionStorage.setItem('showAlert', s);
    },
    updateTotalCredit(state, t){
      state.totalCredit = t;
      window.sessionStorage.setItem('totalCredit', t);
    }
  },
  actions: {
  },
  modules: {
  }
})

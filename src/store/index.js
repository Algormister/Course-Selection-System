import { createStore } from 'vuex'

export default createStore({
  state: {
    userid: window.sessionStorage.getItem('id'),             //null or id
    term: window.sessionStorage.getItem('term'),
    lessonInfo: [{lessonName: '数据结构', lessonId: '01', tName: 'sj', place: 'C101', time:'一1-3,三1-2',credit: 5, tId: 1001, resolveTime:'五1-2', resolvePlace: 'D101', school: '宝山'},
    {lessonName: '数据库原理', lessonId: '02', tName: 'lwq', place: 'C102', time:'二11-13,四1-2',credit: 4, tId: 1002, resolveTime:'五3-4', resolvePlace: 'D102', school: '延长'}],
  //   lessonTableInfo:  [[1, '8:00 ~ 8:45', 'A', 'B', 'A', 'B', '', '', ''],
  //                     [2, '8:55 ~ 9:40', 'A', 'B', 'A', 'B', '', '', ''],
  //                     [3, '10:00 ~ 10:45', 'A', 'B', '', '', '', '', ''],
  //                     [4, '10:55 ~ 11:40', '', '', '', '', '', '', ''],
  //                     [5, '12:10 ~ 12:55', '', '', '', '', '', '', ''],
  //                     [6, '13:05 ~ 13:50', '', '', '', '', '', '', ''],
  //                     [7, '14:10 ~ 14:55', '', '', '', '', '', '', ''],
  //                     [8, '15:05 ~ 15:50', '', '', '', '', '', '', ''],
  //                     [9, '16:00 ~ 16:45', '', '', '', '', '', '', ''],
  //                     [10, '16:55 ~ 17:40', '', '', '', '', '', '', ''],
  //                     [11, '18:00 ~ 18:45', '', '', '', '', '', '', ''],
  //                     [12, '18:55 ~ 19:40', '', '', '', '', '', '', ''],
  //                     [13, '19:50 ~ 20:35', '', '', '', '', '', '', '']]
  },
  getters:{
    credit: state =>{
      let c = 0;
      for (let item of state.lessonInfo){
        c += item.credit
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
      for (let i = 0; i < state.lessonInfo.length; i++){
        let time = state.lessonInfo[i].time;
        let timeArray = time.split(',');
        for (let j = 0; j < timeArray.length; j++){
            let hour = timeArray[j].substring(1, timeArray[j].length);
            let hourArray = hour.split('-');
            for (let k = getRow(hourArray[0]); k <= getRow(hourArray[1]); k++){
                table[k][getCol(timeArray[j][0])] = String.fromCharCode(i + 65);
            }
        }
      }
      return table;
    }
  },
  mutations: {
    updateUserid(state, uid){
      state.userid = uid;
      window.sessionStorage.setItem('id', uid)
    },
    updateTerm(state, term){
      state.term = term;
      window.sessionStorage.setItem('term', term)
    },
    updateCredit(state, c){
      state.credit = c;
      window.sessionStorage.setItem('credit', c)
    },
    updateLessonInfo(state, info){
      state.lessonInfo = info
      window.sessionStorage.setItem('lessonInfo', info)
    },
    updateLessonTableInfo(state, info){
      state.lessonTableInfo = info
      window.sessionStorage.setItem('lessonTableInfo', info)
    },
    dropCourses(state, dropInfo){
      for (let i = state.lessonInfo.length - 1; i >= 0; i--){
        if (dropInfo.indexOf(state.lessonInfo[i].lessonId) > -1){
          state.lessonInfo.splice(i, 1);
        }
      }
      window.sessionStorage.setItem('lessonInfo', state.lessonInfo);
    }
  },
  actions: {
  },
  modules: {
  }
})

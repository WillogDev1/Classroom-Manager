function getListClass(){

  const pegaPlanilha =  new Planilha("Salas");
  
  
  const response = Classroom.Courses.list()
  console.log(response);
  
  const courseId = response.courses.map(
    function({id}) {
        console.log(id);
      return id;
    }
  );
  
  const courseName = response.courses.map(
    function({name}) {
        console.log(name);
      return name
    }
  );
  
  const courseDescricao = response.courses.map(
    function({description}) {
        console.log(description);
      return description;
    }
  );
  
  const courseFolder = response.courses.map(
    function({teacherFolder:{id}}) {
        console.log(id);
      return id;
    }
  );
  
  
  
    for(var i = 0; i < courseName.length; i++){
      const colunaIdCurso           = pegaPlanilha.setValuesClasses().getRange(2 + i,1).setValue  (courseId[i]);
      const colunaNameCurso         = pegaPlanilha.setValuesClasses().getRange(2 + i,2).setValue  (courseName[i]);
      const colunaDescriCurso       = pegaPlanilha.setValuesClasses().getRange(2 + i,3).setValue  (courseDescricao[i]);
      const colunaDriveFolderCurso  = pegaPlanilha.setValuesClasses().getRange(2 + i,4).setValue  (courseFolder[i]);
    }
  
  }
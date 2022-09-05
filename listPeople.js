function getListPeople()
{
  //Limpa Range quando incia func
  //Inicio
    const pegaPlanilhaLimpa = new Planilha("Visualizar Sala","D2:I1001")
    const limpaPlanilha = pegaPlanilhaLimpa.clearSheet();
  //End



  const pegaPlanilha =  new Planilha("Visualizar Sala","A3:C3");
  const value = pegaPlanilha.getOneValue();
  value.toString();
  console.log(value);

  const responseTeachers = Classroom.Courses.Teachers.list(value);
  const responseStudents = Classroom.Courses.Students.list(value);
  console.log(responseTeachers);
  console.log(responseStudents);

  const profNome = responseTeachers.teachers.map
  (
    function({userId,courseId,profile:{emailAddress,name: {fullName}}})
    {
      console.log(fullName);
      return fullName;
    }
  );

  const profEmail = responseTeachers.teachers.map
  (
    function({ userId,courseId,profile:{emailAddress} }) 
    {
      console.log(emailAddress);
      return emailAddress;
    }
  )

const studentNome = responseStudents.students.map
(
  function({profile:{name: {fullName}}})
    {
      console.log(fullName);
      return fullName;
    }
)


const studentEmail = responseStudents.students.map
(
  function({ userId,courseId,profile:{emailAddress} }) {
          console.log(emailAddress);
        return emailAddress;
      }
    );




for(var i = 0; i < studentEmail.length; i++)
  {   
     const colunaNomeProfessor  = pegaPlanilha.setValuesClasses().getRange(2 + i,4).setValue(profNome[i]);
     const colunaEmailProfessor = pegaPlanilha.setValuesClasses().getRange(2 + i,6).setValue(profEmail[i]);
     const colunaNomeAluno      = pegaPlanilha.setValuesClasses().getRange(2 + i,7).setValue(studentNome[i]);
     const colunaEmailAluno     = pegaPlanilha.setValuesClasses().getRange(2 + i,9).setValue(studentEmail[i]);
  }


}
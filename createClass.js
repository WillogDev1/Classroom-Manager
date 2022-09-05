function createClass()
{
  const pegaPlanilha = new Planilha("Criar Salas");
  const pegaValorPlanilha = pegaPlanilha.getValues();
  console.log(pegaValorPlanilha);


  pegaValorPlanilha.forEach(function (row) {
    let requestAPI = Classroom.Courses.create
    (
      {
        "name"      :row[0],
        "section"   :row[1],
        "ownerId"   :row[2]
      }
    );
    return requestAPI;
  })

}
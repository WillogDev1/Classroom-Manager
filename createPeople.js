function invitePeople()
{
    const pegaPlanilha = new Planilha("Inserir Pessoas");
    const pegaValorPlanilha = pegaPlanilha.getValues();
    console.log(pegaValorPlanilha);

pegaValorPlanilha.forEach(function (row) {

    let requestAPI = Classroom.Invitations.create
(
  {
  "courseId": row[0],
  "userId"  : row[1],
  "role"    : row[2]
  }
);
   
    return requestAPI;      
    }
  )
}


function limpaFolha()
{
    const pegaPlanilhaLimpa = new Planilha("Inserir Pessoas","A2:C1000")
    const limpaPlanilha = pegaPlanilhaLimpa.clearSheet();
    return limpaPlanilha;
}
class Planilha {

    constructor(nomeSheet, rangeSheet) 
    {//class constructor
    
    this.nomeSheet = nomeSheet;
    this.rangeSheet = rangeSheet;
    
    }
    
     getValues() 
      {// class method
        var sheetSelect=SpreadsheetApp.getActive().getSheetByName(this.nomeSheet);
        var getData=sheetSelect.getDataRange().getValues();
        getData.shift();//No Headrs
        //console.log(getData);
        return getData;
       
      }
    clearSheet()
      {// class method
        var sheetSelect=SpreadsheetApp.getActive().getSheetByName(this.nomeSheet);
        var data=sheetSelect.getRange(this.rangeSheet).clearContent();
      }
    
    setValuesClasses()
      {// class method
        var sheetSelect=SpreadsheetApp.getActive().getSheetByName(this.nomeSheet);
        return sheetSelect;//Pegando planilha inteira, e depois declerando range
      }
      getOneValue()
      {
        var sheetSelect=SpreadsheetApp.getActive().getSheetByName(this.nomeSheet);
        var data=sheetSelect.getRange(this.rangeSheet).getValue();
        return data;
      }
    
    }
    
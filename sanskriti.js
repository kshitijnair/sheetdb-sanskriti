console.log("whaddup bombshell ;)");

const SHEET_API = "https://sheetdb.io/api/v1/6efxhfxdwwnoq";

SheetDB.read(SHEET_API, {}).then(
  (results) => {
    results.forEach((result) => {
      console.log(result);
    });
  },
  function (error) {
    console.log("KYA RE BHADWE, KYA GALTI KARI? -", error);
  }
);

define({"oj-message":{fatal:"Kritična napaka",error:"Napaka",warning:"Opozorilo",info:"Informacije",confirmation:"Potrditev","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Vrednost ni v pričakovanem formatu.",detail:"Vnesite vrednost v pričakovanem formatu.","plural-separator":", ",hint:{summary:"Primer: {exampleValue}",detail:'Vnesite vrednost v tem formatu: "{exampleValue}".',"detail-plural":'Vnesite vrednost v teh formatih: "{exampleValue}".'},optionHint:{detail:'Sprejeta vrednost za možnost "{propertyName}" je "{propertyValueValid}".',"detail-plural":'Sprejete vednosti za možnost "{propertyName}" so "{propertyValueValid}".'},optionTypesMismatch:{summary:'Vrednost za možnost "{requiredPropertyName}" je zahtevana, ko je možnost "{propertyName}" nastavljena na "{propertyValue}".'},optionTypeInvalid:{summary:'Vrednost pričakovanega tipa ni bila navedena za možnost "{propertyName}".'},optionOutOfRange:{summary:'Vrednost {propertyValue} je zunaj obsega za možnost "{propertyName}".'},optionValueInvalid:{summary:'Za možnost "{propertyName}" je bila navedena neveljavna vrednost "{propertyValue}".'},number:{decimalFormatMismatch:{summary:"Navedena vrednost ni v pričakovanem formatu števila."},shortLongUnsupportedParse:{summary:'"short" in "long" nista podprti vrednosti za razčlenjevanje pretvornika.',detail:"Spremenite komponento v readonly. Polja readonly ne kličejo funkcije parse pretvornika."},currencyFormatMismatch:{summary:"Navedena vrednost ni v pričakovanem formatu denarne enote."},percentFormatMismatch:{summary:"Navedena vrednost ni v pričakovanem formatu odstotka."},invalidNumberFormat:{summary:"Navedena vrednost ni veljavna številka.",detail:"Navedite veljavno številko."}},color:{invalidFormat:{summary:"Neveljaven format barve.",detail:"Neveljavna specifikacija možnosti formata barve."},invalidSyntax:{summary:"Neveljavna specifikacija barve.",detail:"Vnesite vrednost barve, ki je skladna s standardom CSS3."}},datetime:{datetimeOutOfRange:{summary:'Vrednost "{value}" je zunaj obsega za "{propertyName}".',detail:'Vnesite vrednost med "{minValue}" in "{maxValue}".',hour:"ura",minute:"minuta",second:"sekunda",millisec:"milisekunda",month:"mesec",day:"dan",year:"leto","month name":"ime meseca",weekday:"delavnik"},dateFormatMismatch:{summary:"Navedena vrednost ni v pričakovanem formatu datuma."},invalidTimeZoneID:{summary:"Naveden je neveljaven ID časovnega pasu {timeZoneID}."},nonExistingTime:{summary:"Vneseni čas ne obstaja, ker sodi v obdobje prehoda na poletni/zimski čas."},missingTimeZoneData:{summary:"Manjkajo podatki o časovnem pasu. Če želite naložiti podatke o časovnem pasu, prikličite require 'ojs/ojtimezonedata'."},timeFormatMismatch:{summary:"Navedena vrednost ni v pričakovanem formatu časa."},datetimeFormatMismatch:{summary:"Navedena vrednost ni v pričakovanem formatu datuma in časa."},dateToWeekdayMismatch:{summary:'Datum "{date}" ne sovpada z dnem "{weekday}".',detail:"Vnesite delavnik, ki sovpada z datumom."},invalidISOString:{invalidRangeSummary:'Vrednost "{value}" je zunaj obsega za polje "{propertyName}" v nizu ISO 8601 "{isoStr}".',summary:'Navedeni niz "{isoStr}" ni veljaven niz ISO 8601.',detail:"Navedite veljaven niz ISO 8601."}}},"oj-validator":{length:{hint:{min:"Vnesite najmanj toliko znakov: {min}.",max:"Vnesite največ toliko znakov: {max}.",inRange:"Vnesite od {min} do {max} znakov.",exact:"Vnesite toliko znakov: {length}."},messageDetail:{tooShort:"Vnesite najmanj toliko znakov: {min}.",tooLong:"Vnesite največ toliko znakov: {max}."},messageSummary:{tooShort:"Vnesenih je premalo znakov.",tooLong:"Vnesenih je preveč znakov."}},range:{number:{hint:{min:"Vnesite število, večje ali enako {min}.",max:"Vnesite število, manjše ali enako {max}.",inRange:"Vnesite število med {min} in {max}.",exact:"Vnesite število {num}."},messageDetail:{rangeUnderflow:"Vnesite {min} ali višje število.",rangeOverflow:"Vnesite {max} ali nižje število.",exact:"Vnesite število {num}."},messageSummary:{rangeUnderflow:"Število je prenizko.",rangeOverflow:"Število je previsoko."}},datetime:{hint:{min:"Vnesite datum in čas, enaka ali poznejša od {min}.",max:"Vnesite datum in čas, enaka ali zgodnejša od {max}.",inRange:"Vnesite datum in čas med {min} in {max}."},messageDetail:{rangeUnderflow:"Vnesite datum, enak ali poznejši od {min}.",rangeOverflow:"Vnesite datum, enak ali zgodnejši od {max}."},messageSummary:{rangeUnderflow:"Datum in čas sta zgodnejša od najzgodnejšega dovoljenega datuma in časa.",rangeOverflow:"Datum in čas sta poznejša od najpoznejšega dovoljenega datuma in časa."}},date:{hint:{min:"Vnesite datum, enak ali poznejši od {min}.",max:"Vnesite datum, enak ali zgodnejši od {max}.",inRange:"Vnesite datum med {min} in {max}."},messageDetail:{rangeUnderflow:"Vnesite datum, enak ali poznejši od {min}.",rangeOverflow:"Vnesite datum, enak ali zgodnejši od {max}."},messageSummary:{rangeUnderflow:"Datum je zgodnejši od najzgodnejšega dovoljenega datuma.",rangeOverflow:"Datum je poznejši od najpoznejšega dovoljenega datuma."}},time:{hint:{min:"Vnesite čas, enak ali poznejši od {min}.",max:"Vnesite čas, enak ali zgodnejši od {max}.",inRange:"Vnesite čas med {min} in {max}."},messageDetail:{rangeUnderflow:"Vnesite čas ob ali po {min}.",rangeOverflow:"Vnesite čas ob ali pred {max}."},messageSummary:{rangeUnderflow:"Čas je zgodnejši od najzgodnejšega dovoljenega časa.",rangeOverflow:"Čas je poznejši od najpoznejšega dovoljenega časa."}}},restriction:{date:{messageSummary:"Datum {value} je iz onemogočenega vnosa.",messageDetail:"Datum, ki ste ga izbrali, ni na voljo. Poskusite z drugim datumom."}},regExp:{summary:"Format je nepravilen.",detail:'Vnesite dovoljene vrednosti, opisane v tem regularnem izrazu: "{pattern}".'},required:{summary:"Vrednost je zahtevana.",detail:"Vnesite vrednost."}},"oj-ojEditableValue":{loading:"Nalaganje",requiredText:"Zahtevano",helpSourceText:"Več o tem ..."},"oj-ojInputDate":{done:"Končano",cancel:"Prekliči",time:"Čas",prevText:"Prejšnje",nextText:"Naslednji",currentText:"Danes",weekHeader:"Teden",tooltipCalendar:"Izberite datum.",tooltipCalendarTime:"Izberite datum/čas.",tooltipCalendarDisabled:"Izbira datuma je onemogočena.",tooltipCalendarTimeDisabled:"Izbira datuma/časa je onemogočena.",picker:"Izbirnik",weekText:"Teden",datePicker:"Izbirnik datuma",inputHelp:"Za dostop do koledarja pritisnite tipko dol ali gor.",inputHelpBoth:"Za dostop do koledarja pritisnite tipko dol ali gor ter Shift in tipko dol ali Shift in tipko gor za dostop do spustnega menija za čas.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Prekliči",okText:"V redu",currentTimeText:"Zdaj",hourWheelLabel:"Ura",minuteWheelLabel:"Minuta",ampmWheelLabel:"Dopoldan/popoldan",tooltipTime:"Izberite čas.",tooltipTimeDisabled:"Izbira časa je onemogočena.",inputHelp:"Za dostop do spustnega menija za čas pritisnite tipko dol ali gor.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Največja dolžina {len} je presežena.",accessibleMaxLengthRemaining:"Toliko preostalih znakov: {chars}."},"oj-ojInputPassword":{regexp:{messageDetail:'Vrednost se mora ujemati s tem vzorcem: "{pattern}".'},accessibleShowPassword:"Pokaži geslo.",accessibleHidePassword:"Skrij geslo."},"oj-ojFilmStrip":{labelAccFilmStrip:"Prikazana je stran {pageIndex} od {pageCount}",labelAccArrowNextPage:"Za prikaz naslednje strani izberite Naprej",labelAccArrowPreviousPage:"Za prikaz prejšnje strani izberite Nazaj",tipArrowNextPage:"Naprej",tipArrowPreviousPage:"Nazaj"},"oj-ojDataGrid":{accessibleSortAscending:"{id} razvrščeno v naraščajočem vrstnem redu",accessibleSortDescending:"{id} razvrščeno v padajočem vrstnem redu",accessibleActionableMode:"Vstopite v izvedljivi način.",accessibleNavigationMode:"Vstopite v način krmarjenja, pritisnite F2 za vstop v urejanje ali izvedljivi način.",accessibleEditableMode:"Vstopite v uredljivi način, pritisnite tipko Escape za krmarjenje zunaj podatkovne mreže.",accessibleSummaryExact:"To je podatkovna mreža z več vrsticami ({rownum}) in več stolpci ({colnum})",accessibleSummaryEstimate:"To je podatkovna mreža z neznanim številom vrstic in stolpcev",accessibleSummaryExpanded:"Trenutno je razširjenih toliko vrstic: {num}",accessibleRowExpanded:"Vrstica razširjena",accessibleExpanded:"Razširjeno",accessibleRowCollapsed:"Vrstica strnjena",accessibleCollapsed:"Strnjeno",accessibleRowSelected:"Vrstica {row} izbrana",accessibleColumnSelected:"Stolpec {column} izbran",accessibleStateSelected:"izbrano",accessibleMultiCellSelected:"Št. izbranih celic: {num}",accessibleColumnSpanContext:"{extent} široko",accessibleRowSpanContext:"{extent} visoko",accessibleRowContext:"Vrstica {index}",accessibleColumnContext:"Stolpec {index}",accessibleRowHeaderContext:"Glava vrstice {index}",accessibleColumnHeaderContext:"Glava stolpca {index}",accessibleRowEndHeaderContext:"Končna glava vrstice {index}",accessibleColumnEndHeaderContext:"Končna glava stolpca {index}",accessibleRowHeaderLabelContext:"Oznaka glave vrstice {level}",accessibleColumnHeaderLabelContext:"Oznaka glave stolpca {level}",accessibleRowEndHeaderLabelContext:"Oznaka končne glave vrstice {level}",accessibleColumnEndHeaderLabelContext:"Oznaka končne glave stolpca {level}",accessibleLevelContext:"Raven {level}",accessibleRangeSelectModeOn:"Način dodajanja izbranega obsega celic je vklopljen.",accessibleRangeSelectModeOff:"Način dodajanja izbranega obsega celic je izklopljen.",accessibleFirstRow:"Prišli ste do prve vrstice.",accessibleLastRow:"Prišli ste do zadnje vrstice.",accessibleFirstColumn:"Prišli ste do prvega stolpca.",accessibleLastColumn:"Prišli ste do zadnjega stolpca.",accessibleSelectionAffordanceTop:"Zgornji oprimek izbora.",accessibleSelectionAffordanceBottom:"Spodnji oprimek izbora.",msgFetchingData:"Pridobivanje podatkov ...",msgNoData:"Ni elementov za prikaz.",labelResize:"Spremeni velikost",labelResizeWidth:"Spremeni širino",labelResizeHeight:"Spremeni višino",labelSortRow:"Razvrsti vrstico",labelSortRowAsc:"Razvrsti vrstico naraščajoče",labelSortRowDsc:"Razvrsti vrstico padajoče",labelSortCol:"Razvrsti stolpec",labelSortColAsc:"Razvrsti stolpec naraščajoče",labelSortColDsc:"Razvrsti stolpec padajoče",labelCut:"Izreži",labelPaste:"Prilepi",labelCutCells:"Izreži",labelPasteCells:"Prilepi",labelCopyCells:"Kopiraj",labelAutoFill:"Samodejno izpolni",labelEnableNonContiguous:"Omogoči nepovezan izbor",labelDisableNonContiguous:"Onemogoči nepovezan izbor",labelResizeDialogSubmit:"V redu",labelResizeDialogCancel:"Prekliči",accessibleContainsControls:"Vsebuje kontrole",labelSelectMultiple:"Izberi več celic",labelResizeDialogApply:"Dodeli",labelResizeFitToContent:"Spremeni velikost, da se prilega",columnWidth:"Širina v pikslih",rowHeight:"Višina v pikslih",labelResizeColumn:"Spremeni velikost stolpca",labelResizeRow:"Spremeni velikost vrstice",resizeColumnDialog:"Sprememba velikosti stolpca",resizeRowDialog:"Spremeni velikost vrstice",collapsedText:"Strni",expandedText:"Razširi"},"oj-ojRowExpander":{accessibleLevelDescription:"Raven {level}",accessibleRowDescription:"Raven {level}, vrstica {num} od {total}",accessibleRowExpanded:"Vrstica razširjena",accessibleRowCollapsed:"Vrstica strnjena",accessibleStateExpanded:"razširjeno",accessibleStateCollapsed:"strnjeno"},"oj-ojStreamList":{msgFetchingData:"Pridobivanje podatkov ..."},"oj-ojListView":{msgFetchingData:"Pridobivanje podatkov ...",msgNoData:"Ni elementov za prikaz.",msgItemsAppended:"Koncu je dodanih toliko elementov: {count}.",msgFetchCompleted:"Vsi elementi so pridobljeni.",indexerCharacters:"A|B|C|Č|D|E|F|G|H|I|J|K|L|M|N|O|P|R|S|Š|T|U|V|Z|Ž",accessibleReorderTouchInstructionText:"Dvakrat tapnite in zadržite. Počakajte na zvok in nato povlecite za prerazporeditev.",accessibleReorderBeforeItem:"Pred {item}",accessibleReorderAfterItem:"Po {item}",accessibleReorderInsideItem:"V {item}",accessibleNavigateSkipItems:"Preskočenih bo toliko elementov: {numSkip}",labelCut:"Izreži",labelCopy:"Kopiraj",labelPaste:"Prilepi",labelPasteBefore:"Prilepi pred",labelPasteAfter:"Prilepi po"},"oj-ojWaterfallLayout":{msgFetchingData:"Pridobivanje podatkov ..."},"oj-_ojLabel":{tooltipHelp:"Pomoč",tooltipRequired:"Zahtevano"},"oj-ojLabel":{tooltipHelp:"Pomoč",tooltipRequired:"Zahtevano"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Znižanje",tooltipIncrement:"Zvišanje"},"oj-ojTable":{accessibleColumnContext:"Stolpec {index}",accessibleColumnFooterContext:"Noga stolpca {index}",accessibleColumnHeaderContext:"Glava stolpca {index}",accessibleContainsControls:"Vsebuje kontrole",accessibleRowContext:"Vrstica {index}",accessibleSortable:"{id} razvrstljivo",accessibleSortAscending:"{id} razvrščeno v naraščajočem vrstnem redu",accessibleSortDescending:"{id} razvrščeno v padajočem vrstnem redu",accessibleStateSelected:"izbrano",accessibleSummaryEstimate:"Tabela z več stolpci ({colnum}) in več kot toliko vrsticami: {rownum}",accessibleSummaryExact:"Tabela z več stolpci ({colnum}) in več vrsticami ({rownum})",labelAccSelectionAffordanceTop:"Zgornji oprimek izbora",labelAccSelectionAffordanceBottom:"Spodnji oprimek izbora",labelEnableNonContiguousSelection:"Omogoči nepovezan izbor",labelDisableNonContiguousSelection:"Onemogoči nepovezan izbor",labelResize:"Spremeni velikost",labelResizeColumn:"Spremeni velikost stolpca",labelResizePopupSubmit:"V redu",labelResizePopupCancel:"Prekliči",labelResizePopupSpinner:"Spremeni velikost stolpca",labelResizeColumnDialog:"Sprememba velikosti stolpca",labelColumnWidth:"Širina v pikslih",labelResizeDialogApply:"Dodeli",labelSelectRow:"Izberi vrstico",labelSelectAllRows:"Izberi vse vrstice",labelEditRow:"Uredi vrstico",labelSelectAndEditRow:"Izberi in uredi vrstico",labelSelectColumn:"Izberi stolpec",labelSort:"Razvrsti",labelSortAsc:"Razvrsti naraščajoče",labelSortDsc:"Razvrsti padajoče",msgFetchingData:"Pridobivanje podatkov ...",msgNoData:"Ni podatkov za prikaz.",msgInitializing:"Inicializiranje ...",msgColumnResizeWidthValidation:"Vrednost za širino mora biti celo število.",msgScrollPolicyMaxCountSummary:"Prekoračeno maksimalno število vrstic za drsenje po tabeli.",msgScrollPolicyMaxCountDetail:"Ponovno naložite z manjšim naborom podatkov.",msgStatusSortAscending:"{0} razvrščeno v naraščajočem vrstnem redu.",msgStatusSortDescending:"{0} razvrščeno v padajočem vrstnem redu.",tooltipRequired:"Zahtevano"},"oj-ojTabs":{labelCut:"Izreži",labelPasteBefore:"Prilepi pred",labelPasteAfter:"Prilepi po",labelRemove:"Odstrani",labelReorder:"Ponovno razvrsti",removeCueText:"Odstranljivo"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Izberite vrednost."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Izberite vrednost."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Izberite vrednost."},searchField:"Polje za iskanje",noMatchesFound:"Ni ustreznih zadetkov",noMoreResults:"Ni več rezultatov",oneMatchesFound:"Najden je en zadetek",moreMatchesFound:"Najdenih je toliko zadetkov: {num}",filterFurther:"Na voljo je več rezultatov, dodatno filtrirajte."},"oj-ojSwitch":{SwitchON:"Vklopljeno",SwitchOFF:"Izklopljeno"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Ni ustreznih zadetkov",noMoreResults:"Ni več rezultatov",oneMatchesFound:"Najden je en zadetek",moreMatchesFound:"Najdenih je toliko zadetkov: {num}",filterFurther:"Na voljo je več rezultatov, dodatno filtrirajte."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Izberite vrednost."},noMatchesFound:"Ni ustreznih zadetkov",oneMatchFound:"Najden je en zadetek",multipleMatchesFound:"Najdenih je toliko zadetkov: {num}",nOrMoreMatchesFound:"{num} ali več najdenih zadetkov",cancel:"Prekliči",labelAccOpenDropdown:"razširi",labelAccClearValue:"počisti vrednost",noResultsLine1:"Ni najdenih rezultatov",noResultsLine2:"Ne najdemo ničesar, kar bi se ujemalo z vašim iskanjem."},"oj-ojInputSearch2":{cancel:"Prekliči",noSuggestionsFound:"Ni najdenih predlogov"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Ni ustreznih zadetkov",oneMatchesFound:"Najden je en zadetek",moreMatchesFound:"Najdenih je toliko zadetkov: {num}"},"oj-ojTreeView":{treeViewSelectorAria:"Izbirnik TreeView {rowKey}",retrievingDataAria:"Pridobivanje podatkov za vozlišče: {nodeText}",receivedDataAria:"Pridobljeni podatki za vozlišče: {nodeText}"},"oj-ojTree":{stateLoading:"Nalaganje ...",labelNewNode:"Novo vozlišče",labelMultiSelection:"Več izbir",labelEdit:"Uredi",labelCreate:"Ustvari",labelCut:"Izreži",labelCopy:"Kopiraj",labelPaste:"Prilepi",labelPasteAfter:"Prilepi po",labelPasteBefore:"Prilepi pred",labelRemove:"Odstrani",labelRename:"Preimenuj",labelNoData:"Ni podatkov"},"oj-ojPagingControl":{labelAccPaging:"Številčenje strani",labelAccPageNumber:"Vsebina strani {pageNum} naložena",labelAccNavFirstPage:"Prva stran",labelAccNavLastPage:"Zadnja stran",labelAccNavNextPage:"Naslednja stran",labelAccNavPreviousPage:"Prejšnja stran",labelAccNavPage:"Stran",labelLoadMore:"Prikaži več...",labelLoadMoreMaxRows:"Dosežena je maksimalna omejitev toliko vrstic: {maxRows}",labelNavInputPage:"Stran",labelNavInputPageMax:"od {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} od {pageMax} elementov",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} od vsaj {pageMax} elementov",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} od približno {pageMax} elementov",msgItemRangeNoTotal:"{pageFrom}-{pageTo} elementov",fullMsgItem:"{pageTo} od {pageMax} elementov",fullMsgItemAtLeast:"{pageTo} od vsaj {pageMax} elementov",fullMsgItemApprox:"{pageTo} od približno {pageMax} elementov",msgItemNoTotal:"{pageTo} elementov",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"od",msgItemRangeOfAtLeast:"od vsaj",msgItemRangeOfApprox:"od približno",msgItemRangeItems:"elementov",tipNavInputPage:"Pojdi na stran",tipNavPageLink:"Pojdi na stran {pageNum}",tipNavNextPage:"Naslednja",tipNavPreviousPage:"Prejšnja",tipNavFirstPage:"Prva",tipNavLastPage:"Zadnja",pageInvalid:{summary:"Vnešena vrednost strani je neveljavna.",detail:"Vnesite vrednost, večjo od 0."},maxPageLinksInvalid:{summary:"Vrednost za maxPageLinks je neveljavna.",detail:"Vnesite vrednost, večjo od 4."}},"oj-ojMasonryLayout":{labelCut:"Izreži",labelPasteBefore:"Prilepi pred",labelPasteAfter:"Prilepi po"},"oj-panel":{labelAccButtonExpand:"Razširi",labelAccButtonCollapse:"Strni",labelAccButtonRemove:"Odstrani",labelAccFlipForward:"Obrni naprej",labelAccFlipBack:"Obrni nazaj",tipDragToReorder:"Povlecite za prerazporeditev",labelAccDragToReorder:"Povlecite za prerazporeditev, na voljo je priročni meni"},"oj-ojChart":{labelDefaultGroupName:"Skupina {0}",labelSeries:"Serija",labelGroup:"Skupina",labelDate:"Datum",labelValue:"Vrednost",labelTargetValue:"Cilj",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Odstotek",labelLow:"Nizko",labelHigh:"Visoko",labelOpen:"Odpri",labelClose:"Zapri",labelVolume:"Količina",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Najmanj",labelMax:"Največ",labelOther:"Drugo",tooltipPan:"Pomikanje",tooltipSelect:"Izbira potujočega napisa",tooltipZoom:"Povečava potujočega napisa",componentName:"Grafikon"},"oj-dvtBaseGauge":{componentName:"Merilnik"},"oj-ojDiagram":{promotedLink:"Št. povezav: {0}",promotedLinks:"Št. povezav: {0}",promotedLinkAriaDesc:"Posredno",componentName:"Diagram"},"oj-ojGantt":{componentName:"Gantogram",accessibleDurationDays:"{0} dni",accessibleDurationHours:"{0} h",accessibleTaskInfo:"Čas začetka je {0}, čas konca je {1}, trajanje je {2}",accessibleMilestoneInfo:"Čas je {0}",accessibleRowInfo:"Vrstica {0}",accessibleTaskTypeMilestone:"Mejnik",accessibleTaskTypeSummary:"Povzetek",accessiblePredecessorInfo:"Št. predhodnikov: {0}",accessibleSuccessorInfo:"Št. naslednikov: {0}",accessibleDependencyInfo:"Tip odvisnosti {0}, povezuje {1} in {2}",startStartDependencyAriaDesc:"od začetka do začetka",startFinishDependencyAriaDesc:"od začetka do konca",finishStartDependencyAriaDesc:"od konca do začetka",finishFinishDependencyAriaDesc:"od konca do konca",tooltipZoomIn:"Povečava",tooltipZoomOut:"Pomanjšava",labelLevel:"Raven",labelRow:"Vrstica",labelStart:"Začetek",labelEnd:"Konec",labelDate:"Datum",labelBaselineStart:"Začetek osnove",labelBaselineEnd:"Konec osnove",labelBaselineDate:"Datum osnove",labelDowntimeStart:"Začetek trajanja zaustavitve",labelDowntimeEnd:"Konec trajanja zaustavitve",labelOvertimeStart:"Začetek nadur",labelOvertimeEnd:"Konec nadur",labelAttribute:"Atribut",labelLabel:"Oznaka",labelProgress:"Potek",labelMoveBy:"Premakni za",labelResizeBy:"Spremeni velikost za",taskMoveInitiated:"Premik naloge inicializiran",taskResizeEndInitiated:"Konec spreminjanja velikosti naloge inicializiran",taskResizeStartInitiated:"Začetek spreminjanja velikosti naloge inicializiran",taskMoveSelectionInfo:"Št. drugih izbranih: {0}",taskResizeSelectionInfo:"Št. drugih izbranih: {0}",taskMoveInitiatedInstruction:"Za premikanje uporabite puščične tipke",taskResizeInitiatedInstruction:"Za spreminjanje velikosti uporabite puščične tipke",taskMoveFinalized:"Premik naloge dokončan",taskResizeFinalized:"Spreminjanje velikosti naloge dokončano",taskMoveCancelled:"Premik naloge preklican",taskResizeCancelled:"Spreminjanje velikosti naloge preklicano",taskResizeStartHandle:"Oprimek začetka spreminjanja velikosti naloge",taskResizeEndHandle:"Oprimek konca spreminjanja velikosti naloge"},"oj-ojLegend":{componentName:"Legenda",tooltipExpand:"Razširi",tooltipCollapse:"Strni"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Drugo",labelGroup:"Skupina",labelSize:"Velikost",labelAdditionalData:"Dodatni podatki",componentName:"Polje {0}"},"oj-ojPictoChart":{componentName:"Slikovni grafikon"},"oj-ojSparkChart":{componentName:"Grafikon"},"oj-ojSunburst":{labelColor:"Barva",labelSize:"Velikost",tooltipExpand:"Razširi",tooltipCollapse:"Strni",componentName:"Večstopenjski tortni grafikon"},"oj-ojTagCloud":{componentName:"Oblak oznak"},"oj-ojThematicMap":{componentName:"Tematski zemljevid",areasRegion:"Področja",linksRegion:"Povezave",markersRegion:"Označevalniki"},"oj-ojTimeAxis":{componentName:"Časovna os"},"oj-ojTimeline":{componentName:"Časovnica",accessibleItemDesc:"Opis je {0}.",accessibleItemEnd:"Čas konca je {0}.",accessibleItemStart:"Čas začetka je {0}.",accessibleItemTitle:"Naziv je {0}.",labelSeries:"Serija",tooltipZoomIn:"Povečava",tooltipZoomOut:"Pomanjšava",labelStart:"Začetek",labelEnd:"Konec",labelAccNavNextPage:"Naslednja stran",labelAccNavPreviousPage:"Prejšnja stran",tipArrowNextPage:"Naslednja",tipArrowPreviousPage:"Prejšnja",navArrowDisabledState:"Onemogočeno",labelDate:"Datum",labelTitle:"Naziv",labelDescription:"Opis",labelMoveBy:"Premakni za",labelResizeBy:"Spremeni velikost za",itemMoveInitiated:"Premik artikla inicializiran",itemResizeEndInitiated:"Konec spreminjanja velikosti artikla inicializiran",itemResizeStartInitiated:"Začetek spreminjanja velikosti artikla inicializiran",itemMoveSelectionInfo:"Št. drugih izbranih: {0}",itemResizeSelectionInfo:"Št. drugih izbranih: {0}",itemMoveInitiatedInstruction:"Za premikanje uporabite puščične tipke",itemResizeInitiatedInstruction:"Za spreminjanje velikosti uporabite puščične tipke",itemMoveFinalized:"Premik artikla dokončan",itemResizeFinalized:"Spreminjanje velikosti artikla dokončano",itemMoveCancelled:"Premik artikla preklican",itemResizeCancelled:"Spreminjanje velikosti artikla preklicano",itemResizeStartHandle:"Oprimek začetka spreminjanja velikosti artikla",itemResizeEndHandle:"Oprimek konca spreminjanja velikosti artikla"},"oj-ojTreemap":{labelColor:"Barva",labelSize:"Velikost",tooltipIsolate:"Osami",tooltipRestore:"Obnovi",componentName:"Drevesni grafikon"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tisoč",labelScalingSuffixMillion:"mio",labelScalingSuffixBillion:"mrd",labelScalingSuffixTrillion:"bil",labelScalingSuffixQuadrillion:"brd",labelInvalidData:"Neveljavni podatki",labelNoData:"Ni podatkov za prikaz",labelClearSelection:"Počisti izbiro",labelDataVisualization:"Vizualizacija podatkov",stateSelected:"Izbrano",stateUnselected:"Neizbrano",stateMaximized:"Maksimirano",stateMinimized:"Minimirano",stateExpanded:"Razširjeno",stateCollapsed:"Strnjeno",stateIsolated:"Osamljeno",stateHidden:"Skrito",stateVisible:"Vidno",stateDrillable:"Omogoča vrtanje",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} od {1}"},"oj-ojNavigationList":{defaultRootLabel:"Seznam za krmarjenje",hierMenuBtnLabel:"Gumb hierarhičnega menija",selectedLabel:"izbrano",previousIcon:"Prejšnji",msgFetchingData:"Pridobivanje podatkov ...",msgNoData:"Ni elementov za prikaz",overflowItemLabel:"Več",accessibleReorderTouchInstructionText:"Dvakrat tapnite in zadržite. Počakajte na zvok in nato povlecite za prerazporeditev.",accessibleReorderBeforeItem:"Pred {item}",accessibleReorderAfterItem:"Po {item}",labelCut:"Izreži",labelPasteBefore:"Prilepi pred",labelPasteAfter:"Prilepi po",labelRemove:"Odstrani",removeCueText:"Odstranljivo"},"oj-ojSlider":{noValue:"ojSlider nima vrednosti",maxMin:"Maksimalna vrednost ne sme biti nižja ali enaka minimalni vrednosti",startEnd:"value.start ne sme biti večji od value.end",valueRange:"Vrednost mora biti v razponu od minimalne do maksimalne vrednosti",optionNum:"Možnost {option} ni številka",invalidStep:"Neveljaven korak; korak mora biti večji od 0",lowerValueThumb:"sličica nižje vrednosti",higherValueThumb:"sličica višje vrednosti"},"oj-ojDialog":{labelCloseIcon:"Zapri"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Vstopanje v pojavni element. Pritisnite F6 za krmarjenje med pojavnim elementom in povezano kontrolo.",ariaLiveRegionInitialFocusNone:"Pojavni element je odprt. Pritisnite F6 za krmarjenje med pojavnim elementom in povezano kontrolo.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Vstopanje v pojavni element. Pojavni element je mogoče zapreti s krmarjenjem do zadnje povezave v pojavnem elementu.",ariaLiveRegionInitialFocusNoneTouch:"Pojavni element je odprt. Krmarite do naslednje povezave za vzpostavitev fokusa v pojavnem elementu.",ariaFocusSkipLink:"Dvakrat tapnite za krmarjenje do odprtega pojavnega elementa.",ariaCloseSkipLink:"Dvakrat tapnite, da se odprti pojavni element zapre."},"oj-ojRefresher":{ariaRefreshLink:"Aktivirajte povezavo za osvežitev vsebine",ariaRefreshingLink:"Osveževanje vsebine",ariaRefreshCompleteLink:"Osveževanje dokončano"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Pokaži dejanja začetka",ariaShowEndActionsDescription:"Pokaži dejanja konca",ariaHideActionsDescription:"Skrij dejanja"},"oj-ojIndexer":{indexerCharacters:"A|B|C|Č|D|E|F|G|H|I|J|K|L|M|N|O|P|R|S|Š|T|U|V|Z|Ž",indexerOthers:"#",ariaDisabledLabel:"Nobena glava skupine se ne ujema",ariaOthersLabel:"število",ariaInBetweenText:"Med {first} in {second}",ariaKeyboardInstructionText:"Za izbiro vrednosti pritisnite tipko Enter.",ariaTouchInstructionText:"Dvakrat tapnite in zadržite za vstop v način kretenj, nato pa za prilagajanje vrednosti povlecite gor ali dol."},"oj-ojMenu":{labelCancel:"Prekliči",ariaFocusSkipLink:"Fokus je v meniju, dvakrat tapnite ali podrsnite za premik fokusa na prvi element menija."},"oj-ojColorSpectrum":{labelHue:"Odtenek",labelOpacity:"Neprosojnost",labelSatLum:"Zasičenost/svetilnost",labelThumbDesc:"Štirismerni drsnik za barvni spekter."},"oj-ojColorPalette":{labelNone:"Brez"},"oj-ojColorPicker":{labelSwatches:"Barvne palete",labelCustomColors:"Prilagojene barve",labelPrevColor:"Prejšnja barva",labelDefColor:"Privzeta barva",labelDelete:"Izbriši",labelDeleteQ:"Brisanje?",labelAdd:"Dodaj",labelAddColor:"Dodaj barvo",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Odtenek",labelSliderSaturation:"Zasičenost",labelSliderSat:"Zas.",labelSliderLightness:"Svetlost",labelSliderLum:"Svetilnost",labelSliderAlpha:"Alfa",labelOpacity:"Neprosojnost",labelSliderRed:"Rdeča",labelSliderGreen:"Zelena",labelSliderBlue:"Modra"},"oj-ojFilePicker":{dropzoneText:"Tukaj spustite datoteke ali kliknite za nalaganje",singleFileUploadError:"Naložite po eno datoteko naenkrat.",singleFileTypeUploadError:"Ne morete nalagati datotek tipa {fileType}.",multipleFileTypeUploadError:"Ne morete nalagati datotek tega tipa: {fileTypes}.",dropzonePrimaryText:"Povlecite in spustite",secondaryDropzoneText:"Izberite datoteko ali jo spustite sem.",secondaryDropzoneTextMultiple:"Izberite ali spustite datoteke sem.",unknownFileType:"neznano"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"V teku"},"oj-ojMessage":{labelCloseIcon:"Zapri",categories:{error:"Napaka",warning:"Opozorilo",info:"Informacije",confirmation:"Potrditev"}},"oj-ojSelector":{checkboxAriaLabel:"Izbira potrditvenega polja {rowKey}",checkboxAriaLabelSelected:" izbrano",checkboxAriaLabelUnselected:" neizbrano"},"oj-ojMessages":{labelLandmark:"Sporočila",ariaLiveRegion:{navigationFromKeyboard:"Vstopanje v področje sporočil. Pritisnite F6 za krmarjenje nazaj do elementa, ki je bil v fokusu pred tem.",navigationToTouch:"Področje sporočil ima nova sporočila. Uporabite rotor pripovedovalca za krmarjenje do mejnika sporočil.",navigationToKeyboard:"Področje sporočil ima nova sporočila. Pritisnite F6 za krmarjenje do najnovejšega področja sporočil.",newMessage:"Kategorija sporočil {category}. {summary}. {detail}."}},"oj-ojMessageBanner":{close:"Zapri",navigationFromMessagesRegion:"Vstopanje v področje sporočil. Pritisnite F6 za krmarjenje nazaj do elementa, ki je bil v fokusu pred tem.",navigationToMessagesRegion:"Področje sporočil ima nova sporočila. Pritisnite F6 za krmarjenje do najnovejšega področja sporočil.",error:"Napaka",warning:"Opozorilo",info:"Informacije",confirmation:"Potrditev"},"oj-ojConveyorBelt":{tipArrowNext:"Naslednji",tipArrowPrevious:"Prejšnji"}});
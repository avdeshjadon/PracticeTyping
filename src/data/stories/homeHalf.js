// home_half: a s d f j k l ; space
// Word pool: a, ad, add, adds, ads, alas, all, as, ask, dad, dads, fad, fads,
//            fall, falls, fast, flask, flasks, lad, lads, lass, sad, salad, salads

const homeHalf = [
  "a sad lad falls; dad adds salad; flask falls fast; lass ask all lads; a flask falls as a lad; add salad dad; alas a sad lass falls; lads ask dad; fads fall fast; all flasks fall",
  "dad ask a lad; sad lass adds salad; a flask falls; all lads fall fast; alas dad adds fads; ask a lass; flasks fall as lads add salad; a sad dad falls; fall fast as all ask; flask salad falls",
  "lass falls fast; a lad adds all salad; dad ask lads; sad flask falls; alas a lass falls; add all fads; lads fall as dad asks; a flask falls fast; salad adds fall; ask all sad dads",
  "all lads ask dad; a sad flask falls; lass adds salad; fads fall fast; alas a lad falls; dad adds all; ask a sad lass; flasks fall as lads; salad falls fast; add a flask; lads ask all",
  "a lass ask dad; sad lads add salad; flask falls; all fall fast; alas dad asks lads; a fad falls; add all flasks; lass falls as dad adds; salad ask a lad; sad falls fast; dad add salad",
  "ask all lads; a sad lass falls fast; dad adds flask; alas a lad ask; salad falls; fads add all; lass falls as dad; a flask adds salad; lads fall fast; sad dad ask a lass; all flasks fall",
  "dad falls fast; a lad ask all; sad lass adds; flask falls as lads add; alas a dad falls; salad ask lass; all fads fall; add a sad flask; lads ask dad; falls fast as all add salad",
  "a flask ask lads; sad dad falls; lass adds all salad; alas a lad falls fast; fall as dad ask; fads add flask; all lads fall; a sad lass adds; salad falls flask; ask all dads; add fast",
  "lads fall as sad flask adds; dad ask all; a lass falls fast; alas add salad; fads fall; all lads ask; a flask falls as dad; sad lass adds all; salad ask lads; fall fast flask; dad adds",
  "a sad lad ask all; lass falls; dad adds salad fast; alas flask falls; lads add all fads; ask a dad; fall as sad lass; flask salad falls; all ask lads; add a sad flask; falls fast",
  "all sad lads fall; a lass ask dad; flask adds salad; alas fall fast; dad ask lads; a fad falls as all add; lass falls flask; sad salad falls; lads ask all; add a flask; dad falls fast",
  "ask sad lads; a dad adds all; flask falls fast; alas lass falls; salad add a lad; all fads fall; dad ask a flask; lads fall as lass adds; a sad fall; fast flask salad; ask all dad",
  "dad adds fads; a sad lass ask all; flask falls lad; alas fall fast; lads add salad; all ask a dad; fall as flask adds; lass sad falls; a lad ask lads; salad falls fast; add all flasks",
  "a flask falls; sad lads ask all; dad adds a salad; alas lass falls fast; fads add flask; all lads fall; ask a sad dad; fall as lass adds; salad flask falls; lads ask all; add fast",
  "fall fast as lads ask; a sad dad adds; flask salad falls; alas all lass; add a lad; fads fall as dad; ask all sad lads; lass falls flask; a flask adds all; salad falls fast; dad ask",
  "a lass falls as dad adds salad; sad lads ask; all flask falls; alas a lad falls fast; add fads; lads fall as all ask; flask adds a salad; dad falls; ask a sad lass; fall fast flasks",
  "sad dad ask all lads; a flask falls; lass adds salad fast; alas fall as lads add; all fads fall; ask dad; a sad lass falls flask; salad adds all; lads ask a lad; flask falls fast; add",
  "all lads fall fast; a sad lass ask; dad adds flask salad; alas a flask falls; fads add all; ask sad lads; fall as dad adds; lass flask falls; a lad ask all; salad falls; add fast dad",
  "ask a sad lad; lass falls fast; dad adds all salad; alas flasks fall; lads add fads; all ask dad; a flask falls as lass; sad falls flask; salad ask lads; add all; fall fast as dad adds",
  "a lad ask sad lass; dad falls fast; all add flask salad; alas lads fall; ask a dad; fads fall as all add; flask falls lass; sad salad adds; lads ask all; a flask falls fast; add dad",
  "lass ask all sad lads; a dad adds salad; flask falls fast; alas a lad fall; fads add; all lads ask dad; fall as lass adds flask; sad falls; salad ask a lad; add all fast; dad flask falls",
  "a sad flask falls fast; dad ask lads; all lass adds salad; alas fall as a lad ask; fads fall; add all flasks; lads fall fast; sad lass ask dad; a flask salad; ask all; falls add dad",
  "dad falls; a sad lass ask lads; all add salad fast; alas flask falls; lads ask all; fads fall as dad adds; a lad falls flask; sad ask all; lass adds; salad flask falls; fall fast as all ask",
  "ask all lads; a dad adds fads; sad flask falls fast; alas lass falls; salad add a lad; all fall as dad; flask adds all; lads ask a sad lass; fall fast; add salad; dad ask a flask falls",
];

export default homeHalf;

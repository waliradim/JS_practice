// এমন একটি ফাংশন লিখুন যেখানে currentRun এবং requiredRun, remaingOver দিলে
// একটা Team এর Required Run Rate রিটার্ন করে। *
// ৫০ অভারের ম্যাচ

let ReqRunRate = (Crun, ReqRun, Rover) => {
  return (ReqRun - Crun) / Rover;
};
let ans = ReqRunRate(135, 345, 25);
console.log(ans);

// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  if (filename.includes('.html')) {
    return "text/html";
  } else if (filename.includes('.css')) {
    return "text/css";
  } else if (filename.includes('.jpeg')) {
    return "image/jpeg";
  }  else if (filename.includes('.jpg')) {
    return "image/jpeg";
  } else {
    return "text/plain" ;
  }
}
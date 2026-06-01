function processConfirm(question) {
  let answer = confirm(question);
  let result = '';
  if (answer) {
    result = result + "Excellent. We'll play a nice game of chess.";
  } else {
    result = result + 'Maybe later then.';
  }
  return result;
}

processConfirm('Bạn có chắc chắn với quyết định của mình không');
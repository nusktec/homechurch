//alert functions
class Util {
  static alertBox(context, title, msg, type, duration) {
    context.$notify({
      duration: duration,
      type: type,
      group: 'alert',
      title: title,
      text: msg
    });
  }
}

export default { Util };

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = (values) => {
  return sleep(50).then(() => {
    window.alert(`Hello this is Form data:\n\n${JSON.stringify(values, null, 2)}`);
  })
}

export default onSubmit;

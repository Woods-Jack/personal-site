const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};

export const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString('en-US', options);
}
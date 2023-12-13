async function sendEmail(data) {
  const { name, email, message } = data;
  try {
    const accessTokenResponse = await fetch('/api/oauth', {
      method: 'GET',
    });

    if (!accessTokenResponse.ok) {
      throw new Error('Failed to fetch access token');
    }

    const { accessToken } = await accessTokenResponse.json();

    if (accessToken) {
      const emailResponse = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({name, email, message, accessToken}),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email');
      }

      const emailResult = await emailResponse.json();
      return emailResult.message;
    }
  } catch (error) {
    console.error(error);
    return 'An error occurred. Please try again later or reach out to me on LinkedIn.';
  }
}

export default sendEmail;

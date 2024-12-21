export async function POST(req: NextRequest) {    
   
    try {  
      const response = await fetch('https://restcountries.com/v3.1/all', { method: 'POST' });
      const data: RecaptchaResponse = await response.json();

      return Response.json({data});
  
      if (data.success) {
        return Response.json({ success: true });
      } else {
        return Response.json(data);
      }
 

    } catch (error) {
      return Response.json({
        error: true,
        message: 'Failed to fetch country data',
        data: String(error),
      });
    }
  }
  
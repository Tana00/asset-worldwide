import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { fullName, subject, email, message, fileName, file } =
    await request.json();

  const res = await sendgrid.send({
    // to: "Jo.costa@assetworldwide.co.uk",
    to: email,
    from: "lukmanagbogun@outlook.com",
    subject: `${subject}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
    
        <title>Asset WorldWide</title>
        <meta name="description" content="Asset WorldWide Contact Us" />
        <meta name="author" content="Asset WorldWide" />
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
    
      <body>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="width: 100% !important"
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  style="
                    border: 1px solid #eaeaea;
                    border-radius: 5px;
                    margin: 0px 0 40px;
                    background-color: #fafafa;
                    color: #12355B;
                  "
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="40"
                >
                  <tbody style="margin-left: 20px; margin-right: 20px">
                    <h3>
                      You've got a new mail from ${fullName}, their email is: ✉️${email}
                    </h3>
                    <div style="font-size: 18px">
                    <h4>Message</h4>
                   <p>${message}</p>
                    </div>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>`,
    attachments: [
      {
        content: file?.toString("base64") || "",
        filename: fileName,
        type: "application/*",
        disposition: "attachment",
      },
    ],
  });
  console.log("response", NextResponse);
  return NextResponse.json({ message: "success", status: res[0].statusCode });
}

export const htmlTemplate = (title: string, content: string) => {
  return `
        <table width="100%" border="0" cellspacing="0" cellpadding="0"
        style="background-color: #F7F7F7; padding-top: 20px; padding-bottom: 20px; height: 100vh;">
        <tr>
          <td align="center">
            <div style="background-color: #FFFFFF; box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.20); font-family: Arial;
              margin-top: 20px; max-width: 550px; width: 100%; text-align: left;border-radius: 12px">
              <div style="background-color: #C2FA05; padding: 20px; text-align: center; border-top-left-radius: 12px; border-top-right-radius: 12px;">
                <h2 style="color: #000000; font-size: 24px; font-weight: 700;">
                  ${title}
                </h2>
              </div>

              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; color: #000000; font-size: 16px; font-weight: 400; padding: 20px;">
                ${content}
              </div>
            </div>
          </td>
        </tr>
      </table>
        `;
};

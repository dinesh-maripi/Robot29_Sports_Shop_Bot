# Sports Shop Bot
> Please go through the [usecase dscription](https://www.youtube.com/watch?v=e2HLbfaLGnM&feature=youtu.be)
---
[Sports Shop Website](https://botsdna.com/sportshop/index.html)
## In this project, we perform the following activities

1. open browser
    1. check app state whether the page is fully loaded or not
    1. extract product details using **inject js** script and assign to **strjson_Products**
    1. deserialize **strjson_Products** to **dt_Products** DataTable
    1. write **dt_Products** DataTable to Excel
    1. click **schools**
    1. extract school data and assign to **dt_School**
1. read EmailsDatabase.xlsx and assign to **dt_Emails**
1. join **dt_School & dt_Emails** datatables and save output to **dt_SchoolsAndEmail**
1. add **Discount, & ReceiverEmail** data columns to **dt_SchoolAndEmail** DataTable 
1. loop through each record in **dt_SchoolAndEmail**
    1. invoke **Get_Discount** workflow to get **Discount**
    1. assign **ReceiverEmail** based on business logic
    1.update **Discount & ReceiverEmail** data row items
1. write **dt_SchoolAndEmails** DataTable to Excel
1. open **Microsoft Word** copy **SportsTemplate.docx** using keyboard shortcut
1. loop though each row in **dt_SchoolAndEmail** DataTable
    1. perform **word automation** which includes, inserting discount, product image, product name, product code, product price & offer price 

    1. save **word document as PDF**
    1. invoke **Send_Offers_Mail** workflow to send mails to schools with **Sports Quote PDF**
1. done

### Key takeaways
- **check app state**
- **Join DataTables**
- **download image** using **Send HTTP** activity 
- ensuring file downloaded completely using **wait for download** activity

- add image to word document using **Add Picture** activity
- **delete file**
- **save documents as PDF**
- sending mail along with PDF attachment using **Send Outlook Mail Message** activity
- custom js code using **inject js** 


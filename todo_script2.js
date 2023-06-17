getTable();
    
function getTable()
{
    let NewLocalStorageLength=localStorage.length;
    let strHTML='';

    if(NewLocalStorageLength > 0)
    {    
        // for(let i=0;i<NewLocalStorageLength;i++)
        // {
        //     strHTML+='<tr id='+i+'><td>'+(i+1)+'</td><td>'+localStorage.getItem(i)+
        //     '</td><td><button type="button" class="btn btn-danger" onclick="deleteNote('+i+')">
        //     Delete</button></td></tr>';
        // }
        // for (const localStorage in user) 
        // {
        //     console.log(`${key}: ${user[key]}`);
        // }
        for(var key in localStorage){
            if(localStorage.hasOwnProperty(key)) 
            {
               console.log(key + ' : ' + localStorage.getItem(key));
               strHTML+='<tr id='+key+'><td>'+localStorage.getItem(key)+
                    '</td><td><button type="button" class="btn btn-danger" onclick="deleteNote('+key
                    +')">Delete</button></td></tr>';
            }
         }
    }
    else
    {
        strHTML='<tr colspan="2"><td>No records Found !</td></tr>';
    }

    document.getElementById('noteBody').innerHTML=strHTML;
}

function deleteNote(removeId)
{
    localStorage.removeItem(removeId);
    getTable();
}

function checkLength()
{
    if(localStorage.length==0)
    {
        document.getElementById('noteBody').innerHTML='';
    }
}

function AddNote()
{
    if(document.getElementById('content').value==null || document.getElementById('content').value==undefined)
    {
        return false;
    }
    else
    {
        const d = new Date();
        let ms=d.getTime();
        console.log('ms='+ms);
        let LocalStorageLength=localStorage.length;
        checkLength();
        console.log('content='+document.getElementById('content').value);
        localStorage.setItem(ms,document.getElementById('content').value);
        // let NewLocalStorageLength=localStorage.length;
        setTable(ms,document.getElementById('content').value);
    }
}

function setTable(ms,content)
{
    tr=document.createElement('TR');
    tr.setAttribute('id',ms);
    let td=document.createElement('TD');
    td.innerHTML=content;
    
    let td3=document.createElement('TD');
    td3.innerHTML='<button type="button" class="btn btn-danger" onclick="deleteNote('+ms+')">Delete</button>';
    NewLocalStorageLength=localStorage.length;
    if(NewLocalStorageLength > 0)
    {  
        tr.appendChild(td);   
        tr.appendChild(td3);   
        //document.getElementById('noteBody').appendChild('<tr>'+content+'</tr>');
        document.getElementById('noteBody').appendChild(tr);
    }
    else
    {
        document.getElementById('noteBody').innerHTML='<tr colspan="2"><td>No records Found !</td></tr>';
    }
    document.getElementById('content').value='';
}
        
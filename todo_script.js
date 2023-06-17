
    getTable();
    
    function getTable()
    {
        let NewLocalStorageLength=localStorage.length;
        let strHTML='';

        if(NewLocalStorageLength > 0)
        {    
            for(let i=0;i<NewLocalStorageLength;i++)
            {
                strHTML+='<tr id='+i+'><td>'+(i+1)+'</td><td>'+localStorage.getItem(i)+'</td><td><button type="button" class="btn btn-danger" onclick="deleteNote('+i+')">Delete</button></td></tr>';
            }
        }
        else
        {
            strHTML='<tr colspan="3"><td>No records Found !</td></tr>';
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
        let LocalStorageLength=localStorage.length;
        checkLength();
        console.log('content='+document.getElementById('content').value);
        localStorage.setItem(LocalStorageLength,document.getElementById('content').value);
        let NewLocalStorageLength=localStorage.length;
        setTable(NewLocalStorageLength,document.getElementById('content').value);
    }

    function setTable(NewLocalStorageLength,content)
    {
        tr=document.createElement('TR');
        tr.setAttribute('id',NewLocalStorageLength);
        let td=document.createElement('TD');
        td.innerHTML=content;
        let td1=document.createElement('TD');
        td1.innerHTML=NewLocalStorageLength;
        
        let td3=document.createElement('TD');
        td3.innerHTML='<button type="button"  class="btn btn-danger" onclick="deleteNote('+NewLocalStorageLength+')">Delete</button>';
        if(NewLocalStorageLength > 0)
        { 
            tr.appendChild(td1);   
            tr.appendChild(td);   
            tr.appendChild(td3);   
            //document.getElementById('noteBody').appendChild('<tr>'+content+'</tr>');
            document.getElementById('noteBody').appendChild(tr);
        }
        else
        {
            document.getElementById('noteBody').innerHTML='<tr colspan="3"><td>No records Found !</td></tr>';
        }
        document.getElementById('content').value='';
    }
            
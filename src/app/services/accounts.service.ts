export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string ){
        console.log(name + status + ' <=== ######');
        this.accounts.push({name: name, status: status});

        for (const i of this.accounts) {
          console.log( i[0] + i[1] + ' <=== ######');
        }
      }
      updateStatus(id: number, status: string){
        this.accounts[id].status = status;
      }
}

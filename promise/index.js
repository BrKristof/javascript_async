class Vendor {

    #itemlist
    #noItemCallback
    #itemCallback

    set noItemCallback(value){
        this.#noItemCallback = value
    }
    set itemCallback(value){
        this.#itemCallback = value
    }

    constructor(itemList){
        this.#itemlist = itemList
    }

    sellSomething(){
        if(this.#itemlist.length === 0){
            this.#noItemCallback("nincs eladni való termek")
        }
        else{
            this.#itemCallback(this.#itemlist.pop())
        }
    }

    sellSomethingPromise(){
        return new Promise((resolve,reject) => (
            setTimeout(() => {
                if(this.#itemlist.length === 0){
            this.#noItemCallback("nincs eladni való termek")
            }
            else{
                this.#itemCallback(this.#itemlist.pop())
            }
            })
        ))
    }
}

class Client{

    /**
     * @type {Vendor}
     */
    #vendor
    
    constructor(vendor){
        this.#vendor = vendor
        this.#vendor.itemCallback = (element) => {
            console.log(`A kliens vett egy ${element}`)
        }
        this.#vendor.noItemCallback = (reason) => {
            console.log(`A kliens nem vett semmit mert: ${reason}`)
        }
    }

    buyFromSeller(){
        this.#vendor.sellSomething()
    }

    buyFromSellerPromiseHandling(){
        this.#vendor.sellSomething().then((element) => {
            console.log(`A kliens vett egy ${element}`)
        }).catch((reason) => {
            console.log(`A kliens nem vett semmit mert: ${reason}`)
        }).finally("Vásároltunk")
    }

}

const vendor = new Vendor("krumpli")
const client = new Client(vendor)
client.buyFromSeller()
client.buyFromSellerPromiseHandling()
client.buyFromSellerPromiseHandling
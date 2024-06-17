import { scriptAsDataURI } from "apps/utils/dataURI.ts";

export default function Clipboard() {
  function setup () {
    return document?.querySelector('#sponsorMessagePopup')?.addEventListener('click', (item: any) => {
      const msgCopied = item.target.cloneNode(true);
      msgCopied.className = "absolute mt-80 bg-transparent text-white border-transparent flex items-center justify-center text-center w-min whitespace-nowrap h-[50px] gap-2 font-medium text-lg"
      msgCopied.innerHTML = "Please send an email to <span class='font-bold'>cecilia@deco.cx</span>";
      item.target.parentNode?.appendChild(msgCopied)
      setTimeout(function() {
        msgCopied.parentNode.removeChild(msgCopied);
      }, 6000); 
    })
  }
  return (
    <>
      <script
        defer
        src={scriptAsDataURI(setup)}
      />
    </>
  )
}

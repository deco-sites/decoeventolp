import { scriptAsDataURI } from "apps/utils/dataURI.ts";

export default function Clipboard() {
  function setup () {
    return document?.querySelector('#clipboard-btn')?.addEventListener('click', (item: any) => {
      navigator.clipboard.writeText(`Hi! I'm excited to invite you to join me in deco.cx's 5th Hackathon - HTMX Edition. It's a 3-day virtual event starting on Friday, June 28th. The goal is to transform ideas into HTMX website templates with PageSpeed 90+ and compete for over $5K USD in prizes.
I'm participating and I think this could be a great fit for you too. Register now: https://deco.cx/hackathon5.
When you register, please enter my email in the "referral code" section of the form so that my referrals are counted and ranked. Hope you can make it 🙂!`);
      const msgCopied = item.target.cloneNode(true);
      msgCopied.className = "bg-transparent text-[#fff] border-transparent flex items-center justify-center text-center w-min whitespace-nowrap h-[50px] gap-2 font-medium text-lg"
      msgCopied.innerHTML = "<img style='margin-left: 10px;' src='https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10325/c1739bf9-c00c-4a01-9f11-3d18e5b683c1' alt='check' width='20'>Invite message copied to clipboard!";
      item.target.parentNode?.appendChild(msgCopied)
      setTimeout(function() {
        msgCopied.parentNode.removeChild(msgCopied);
      }, 3000); 
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

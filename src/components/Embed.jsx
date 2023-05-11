import { useRef, useState } from 'react'
import Button from './Button'
import { toast } from 'sonner'
import { IconEmbed } from '../Icons'

export default function Embed () {
  const textareaRef = useRef(null)
  const [modal, setModal] = useState(false)

  const url = window.location.href

  function handleClick () {
    setModal(status => !status)
  }

  function handleCopy () {
    navigator.clipboard.writeText(textareaRef.current.value)

    toast.success('Copied to clipboard!')
  }

  return (
    <>
      <Button
        onClick={handleClick}
        title=''
      >
        <IconEmbed /> Embed
      </Button>
      {modal && (
        <section className='modal'>
          <span className='close' onClick={handleClick}>
            Close
          </span>
          <div>
            <textarea
              ref={textareaRef}
              value={`<iframe src="${url}" width="100%" height="100%" style="border: none;"></iframe>`}
              onClick={handleCopy}
              readOnly
            />
          </div>
        </section>
      )}
    </>
  )
}
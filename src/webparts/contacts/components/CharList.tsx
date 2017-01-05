import * as React from "react"
import {AlphabetChars} from "../constants"
import {Link} from "office-ui-fabric-react/lib/Link"

const FirstNameList = () => {
	return (
        <div>
          {
              AlphabetChars.map((char) => 
              <div key={char.romaji}>
                <Link href={"contacts/" + char.romaji}>{char.hiragana}/{char.romaji}</Link>
                <br/>
                </div>
              )
          }  
        </div>
	)
}

export default FirstNameList
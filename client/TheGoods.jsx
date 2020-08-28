import React from 'react'

const App = () => {
    return (
      <>
         {/* {{!--{{visualizer}}--}} */}

        <div id='audio_player'>
            <div id='audio_box'></div>
            <canvas id='analyser'></canvas>
        </div>
        
        
        
        {/* {{!--{{sequencer-below}}--}} */}
        
         <div id="sequencer"> 
                <table>
                    <tr>
                        <td class="executing"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>         
                    
        
                    <tr>
        
                        <td class="executing HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
                        <td class="HH1"></td>
        
                       
                    </tr>
                    
                    
                    <tr>
        
                        <td class="executing HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
                        <td class="HH0"></td>
        
                       
                    </tr> 
                    
                    <tr>
        
                        <td class="executing PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
                        <td class="PHOEBE"></td>
        
                       
                    </tr>
                </table>
            </div>
      </>
      )
  }



export default App
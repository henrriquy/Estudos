using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace ActiveX_CSharp
{
    [ProgId("ActiveX_CSharp.HelloWorld")]
    [ClassInterface(ClassInterfaceType.AutoDual)]
    [Guid("0C926473-A245-43A5-AD51-5B6A98B91F9D")]
    [ComVisible(true)]
    public class HelloWorld
    {
        [ComVisible(true)]
        public String SayHello()
        {
            return "Hello World!";

        }
    }
}

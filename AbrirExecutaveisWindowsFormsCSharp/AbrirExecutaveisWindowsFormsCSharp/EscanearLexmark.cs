using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AbrirExecutaveisWindowsFormsCSharp
{
    public partial class EscanearLexmark : Form
    {
        public EscanearLexmark()
        {
            InitializeComponent();
        }

        private void btnEscanear_Click(object sender, EventArgs e)
        {
            
            try
            {
                System.Diagnostics.Process.Start(getExecutavel());

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {

            }
        }

        public string getExecutavel()
        {
            string path = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);

            return Directory.GetFiles(path).Where(a => a == path + "\\ScanPaperoff.lnk").FirstOrDefault();
        }
    }
}

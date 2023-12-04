import Image from "next/image";
import styles from "./style.module.css";

interface TableProps {
  data: any[]; // Replace 'any' with your actual data type
}
const DynamicTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="rounded-[20px] border-[5px] border-blue-500">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={`${styles.headbar_style}`}>
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th
                        key={key}
                        className={`px-6 py-3 text-left  tracking-wider ${styles.header_style}`}
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`${styles.rows_style}`}
                      style={{
                        background:
                          idx === 0
                            ? "linear-gradient(90deg, rgba(255, 212, 0, 0.48) 0%, rgba(255, 169, 112, 0.50) 100%)"
                            : idx === 1
                            ? "linear-gradient(90deg, rgba(241, 241, 241, 0.48) 0%, rgba(174, 174, 174, 0.50) 100%)"
                            : idx === 2
                            ? "linear-gradient(90deg, rgba(234, 28, 57, 0.53) 0%, rgba(145, 10, 45, 0.52) 100%)"
                            : idx === data.length - 1
                            ? "linear-gradient(90deg, rgba(54, 128, 255, 0.45) 0%, rgba(11, 92, 214, 0.49) 100%)"
                            : "transparent",
                      }}
                    >
                      {Object.keys(item).map((key) => (
                        <td key={key} className="px-6 py-4 whitespace-nowrap">
                          {key === "image" ? (
                            <Image
                              src={item[key]}
                              alt="Profile Pic"
                              className="w-8 h-8 rounded-[50%]"
                              width={8}
                              height={8}
                            />
                          ) : (
                            item[key]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
